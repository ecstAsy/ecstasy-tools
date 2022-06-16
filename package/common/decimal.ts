/*
 * 将金钱数额转化为两位小数 （四舍五入）
 * @param x {number} 任意数
 * @param type {string} 上舍入下舍入
 * @return {string}
 *   1.00
 */
export const Decimal = (x: number, type: 'round' | 'floor' = 'round') => {
  let f = parseFloat(`${x}`);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(f)) {
    return "0.00";
  }
  if (type === 'round') {
    f = Math.round(x * 100) / 100;
  } else {
    f = Math.floor(x * 100) / 100;
  }
  let s = f.toString();
  let rs = s.indexOf(".");

  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }

  return s;
};