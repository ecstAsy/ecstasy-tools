/**
 * @description: 函数节流
 * @param {any} fn
 * @param {number} interval
 * @return {*}
 */
export function FunThrottle(fn: any, interval: number = 300) {
  let canDo:boolean = true;
  return () => {
    if (!canDo) return;
    setTimeout(function()  {
      fn.apply(this, arguments);
      canDo = true;
    }, interval);
  };
}

/**
 * @description: 函数防抖
 * @param {any} fn
 * @param {number} interval
 * @return {*}
 */
export function FunDebounce(fn:any, interval:number = 300) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(this, arguments);
    }, interval);
  };
}