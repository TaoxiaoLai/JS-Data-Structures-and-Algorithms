// vue中的数据动态响应实现
function observe(obj) {
    Object.keys(obj).map(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, k, v) {
    if(v instanceof Object == 'Object') {
        observe(v)
    }
    Object.defineProperty(obj, k, {
        get() {
            return v
        },
        set(nV) {
            if(nV != v) {
                v = nV
                update()
            }
        } 
    })
}