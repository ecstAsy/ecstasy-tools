/**
 * @description: 获取随机字符串
 * @param {*num}
 * @return {*res}
 */
 export const GetRandomStr = (num: number):string => {
  const NUM:number = num || 32;
  const Str = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
  let res:string = "";
  for (let i = 0; i < NUM; i += 1) {
    res += Str.charAt(Math.floor(Math.random() * 62));
  }
  return res;
 };

/**
 * @description: 获取随机颜色
 * @param {*} string
 * @return {*}
 */
export const GetRandomColor = (): string => {
  let str:string = "#";
  const arr:Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < 6; i++) {
      str += arr[Math.floor(Math.random() * 16)]; 
  }
  return str;
}