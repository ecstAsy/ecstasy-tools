/**
 * @description: 转化为 n 位小数 （下舍入）
 * @param {string | number | null | undefined} value
 * @param {number} decimal
 * @return {string}
 */
export const DecimalFloorFormatter = (
  value: string | number | null | undefined,
  decimal: number = 2
) => {
  // 如果不是number 返回 0.00
  let _value = parseFloat(`${value}`);
  
  if (isNaN(_value)) return "0";
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

/**
 * @description: 转化为 n 位小数 （上舍入）
 * @param  {string | number | null | undefined} 
 * @param {number} decimal
 * @return {string}
 */
export const DecimalRoundFormatter = (
  value: string | number | null | undefined,
  decimal: number = 2
) => {
  // 如果不是number 返回 0.00
  let _value = parseFloat(`${value}`);
  
  if (isNaN(_value)) return "0";
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

/**
 * @description: 数值千分位格式化
 * @param {string | number | null | undefined} value
 * @return {string}
 */
export const ThousandFormatter = (value: string | number | null | undefined) => {
  // 如果不是number 返回 0
  let _value = parseFloat(`${value}`);
  if (isNaN(_value)) return "0";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const UppercaseNumber: Array<string> = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
  UpperUnit: Array<string> = ["", "十", "百", "千", "万"];

/**
 * @description: 万分割线
 * @param {number} value
 * @return {string}
 */
const wanLine = (value: number):string => {
  let _value:string = "";
  const strValue:Array<string> = value.toString().split("").reverse();
  let strValueUppercaseArry:Array<string> = [];
  strValue.map((item:string, index:number) => {
    let strUppercase:string = `${UppercaseNumber[item]}${UpperUnit[index]}`;
    if (item === '0') {
      strUppercase = UppercaseNumber[item];
    }
    strValueUppercaseArry = [strUppercase, ...strValueUppercaseArry];
  })
  if (strValueUppercaseArry.length > 1) {
    let length: number = strValueUppercaseArry.length - 1;
    if (strValueUppercaseArry[length] !== "零") {
      _value = strValueUppercaseArry.join("");
    } else {
      // 删除最后一位
      strValueUppercaseArry.splice(length);
      _value = strValueUppercaseArry.join("");
    }
  } else {
    _value += strValueUppercaseArry[0];
  }

  return _value.replace(/一十/g, "十");
}

/**
 * @description: 数字大写
 * @param {string | number | null | undefined} num (max 999999999999.9999)
 * @return {string}
 */
export const NumberUppercaseFormatter = (num:string | number | null | undefined) => {
  let numValue:any = parseFloat(`${num}`);
  if (isNaN(numValue)) return UppercaseNumber[0];
  let _value: string = numValue > 0 ? "" : "负";
  const numValueArry:Array<string> = `${Math.abs(numValue)}`.split('.');
  let dotLeftNumber: number = +numValueArry[0];

  const dotLeftNumberLength: number = `${dotLeftNumber}`.length;
  if (dotLeftNumberLength > 12) return '∞';
  const a = Math.floor((dotLeftNumberLength - 1) / 4);
  // 亿
  a > 1 &&  (_value += `${wanLine(Math.floor(dotLeftNumber / Math.pow(10, 8)))}亿`);
  // 万
  _value += `${wanLine(Math.floor(dotLeftNumber % Math.pow(10, 8) / Math.pow(10, 4)))}万`;
  // 个
  _value += `${wanLine(Math.floor(dotLeftNumber % Math.pow(10, 8) % Math.pow(10, 4)))}`;
  if (numValueArry.length > 1) {
    _value += "点";
    numValueArry[1].split("").map((item: string) => {
      _value += UppercaseNumber[item];
    })
  }

  return _value;
};