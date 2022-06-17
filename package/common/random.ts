/**
 * @description: 获取随机字符串
 * @param {*num}
 * @return {*res}
 */
 export const getRandomStr = (num: number):string => {
  const NUM:number = num || 32;
  const Str = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
  let res:string = "";
  for (let i = 0; i < NUM; i += 1) {
    res += Str.charAt(Math.floor(Math.random() * 62));
  }
  return res;
};
