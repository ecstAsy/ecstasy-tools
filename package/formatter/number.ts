/*
 * 转化为 n 位小数 （下舍入）
 * @param value {string | number | null | undefined} 
 * @param decimal {string} 保留位数
 * @return {string}
 *   1.00
 */
export const DecimalFloorFormatter = (
  value: string | number | null | undefined,
  decimal: number = 2
) => {
  // 如果不是number 返回 0.00
  let _value = parseFloat(`${value}`);
  
  if (isNaN(_value)) return "0.00";
  // 如果是数值
  _value = Math.floor(+value * Math.pow(10, decimal)) / Math.pow(10, decimal);
  let str = _value.toString();
  let rs = str.indexOf(".");

  if (rs < 0) {
    rs = str.length;
    str += ".";
  }
  while (str.length <= rs + decimal) {
    str += "0";
  }

  return str;
}

/*
 * 转化为 n 位小数 （上舍入）
 * @param value {string | number | null | undefined} 
 * @param decimal {string} 保留位数
 * @return {string}
 *   1.00
 */
export const DecimalRoundFormatter = (
  value: string | number | null | undefined,
  decimal: number = 2
) => {
  // 如果不是number 返回 0.00
  let _value = parseFloat(`${value}`);
  
  if (isNaN(_value)) return "0.00";
  // 如果是数值
  _value = Math.round(+value * Math.pow(10, decimal)) / Math.pow(10, decimal);
  let str = _value.toString();
  let rs = str.indexOf(".");

  if (rs < 0) {
    rs = str.length;
    str += ".";
  }
  while (str.length <= rs + decimal) {
    str += "0";
  }

  return str;
}

/*
 * 数值千分位格式化
 * @param value {string | number | null | undefined}
 * @return {string}
 *   1，111.0，078
 */
export const ThousandFormatter = (value: string | number | null | undefined) => {
  // 如果不是number 返回 0
  let _value = parseFloat(`${value}`);
  if (isNaN(_value)) return "0";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}