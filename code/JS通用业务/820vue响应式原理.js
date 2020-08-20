
class Dep {
    constructor () {
        /* 用来存放Watcher对象的数组 */
        this.subs = [];
    }
    /* 在subs中添加一个Watcher对象 */
    addSub (sub) {
        this.subs.push(sub);
    }
    /* 通知所有Watcher对象更新视图 */
    notify () {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}

class Watcher {
    constructor(obj, key, cb) {
      // 将 Dep.target 指向自己
      // 然后触发属性的 getter 添加监听
      // 最后将 Dep.target 置空
      Dep.target = this
      this.cb = cb
      this.obj = obj
      this.key = key
      this.value = obj[key]
      Dep.target = null
    }
    update() {
      // 获得新值
      this.value = this.obj[this.key]
     // 我们定义一个 cb 函数，这个函数用来模拟视图更新，调用它即代表更新视图
      this.cb(this.value)
    }
}

function observe (obj) {
    // 判断类型
    if (!obj || typeof obj !== 'object') {
      return
    }
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
    function defineReactive (obj, key, value) {
      observe(value)  // 递归子属性
      let dp = new Dep() //新增
      Object.defineProperty(obj, key, {
        enumerable: true, //可枚举（可以遍历）
        configurable: true, //可配置（比如可以删除）
        get: function reactiveGetter () {
          console.log('get', value) // 监听
       // 将 Watcher 添加到订阅
         if (Dep.target) {
           dp.addSub(Dep.target) // 新增
         }
          return value
        },
        set: function reactiveSetter (newVal) {
          observe(newVal) //如果赋值是一个对象，也要递归子属性
          if (newVal !== value) {
            console.log('set', newVal) // 监听
            render()
            value = newVal
       // 执行 watcher 的 update 方法
            dp.notify() //新增
          }
        }
      })
    }
}
  
class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
        new Watcher();
        console.log('模拟视图渲染');
    }
}
