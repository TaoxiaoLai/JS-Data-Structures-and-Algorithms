# 浏览器的事件循环

### 进程与线程
**进程** ：进程是 CPU资源分配的最小单位
**线程** ：线程是 CPU调度的最小单位

### 浏览器的 Event Loop

**宏任务** ：常见的有setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等
**微任务** ：常见的有new Promise().then(回调)、MutationObserver(html5新特性) 等

</br>

**Event Loop**
一个宏任务 => 全部微任务 => 一个宏任务 => 全部微任务 ......

循环上面的过程，直到微任务与宏任务的任务队列为空为止，要注意script（整体代码）也算是一个宏任务。
