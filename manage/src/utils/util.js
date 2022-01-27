/** 节流
 * 如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效
 **/
export const  throttle = (fn, delay) => {
  let prev = new Date().getTime()
  return function () {
    let now = new Date().getTime()
    if (now - prev > delay) {
      fn.apply(this, arguments)
      prev = new Date().getTime()
    }
  }
}

/** 防抖
 * 在第一次触发事件时，不立即执行函数，而是给出一个期限值比如500ms，然后：
   如果在500ms内没有再次触发滚动事件，那么就执行函数
   如果在500ms内再次触发滚动事件，那么当前的计时取消，重新开始计时
 **/
export const  debounce = (fn, delay) => {
  let timer = null //借助闭包
  return function () {
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay) // 简化写法
  }
}
