/**
 * @description: 浏览器滚动到顶部
 * @param {*} void
 * @return {*}
 */
export const ScrollToTop = ():void => {
  const _top:number = document.documentElement.scrollTop || document.body.scrollTop;
  if (_top > 0) {
    window.requestAnimationFrame(ScrollToTop);
    window.scrollTo(0, _top - _top / 8);
  }
}