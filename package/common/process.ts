import { isContains } from "./dataType";
/**
 * @description: 去除空格和换行
 * @param {string} value
 * @return {*}
 */
export const ClearSpaceLine = (value: string): string => value.replace(/\ +/g, "").replace(/[\r\n]/g, "");

/**
 * @description: 获取路由中参数值
 * @param {string} name
 * @return {*}
 */
export const GetQueryParam = (name: string) => {
  const query: string = window.location.search.substring(1);
  const params = query.split("&");
  for (let i = 0; i < params.length; i++) {
    const pies = params[i].split("=");
    if (pies[0] === name) {
      return pies[1];
    }
  }
  return false;
}

/**
 * @description: 获取路由中所有参数
 * @param {string} url
 * @return {*}
 */
export const GetUrlQuerys = (url: string = window.location.href) => {
  const _url:Array<string> = url.split('?');
  let _obj: {
    [proppname:string]: any
  } = {};
  if (_url.length === 1) {
    return _obj;
  }
  const _urlArry = _url[1].split('#')[0].split('&');
  _urlArry.map(item=>_obj[item[0]] = item[1])
  return _obj;
}

/**
 * @description: 数组求和
 * @param {Array} values
 * @return {*}
 */
export const GetArraySum = (values: Array<number>) => values.reduce((sum, item) => sum + item, 0);

/**
 * @description: 数组转对象
 * @param {Array} values
 * @param {string} field
 * @return {*}
 */

export const GetObjectFromArray = (values:Array<any>, field: string) => {
  let _obj: {
    [proppname:string | number]: any
  } = {};
  values.map(item => {
    _obj[field] = item;
  })
  return _obj;
}

/**
 * @description: 对象快速赋值
 * @param {any} info
 * @param {Array} values
 * @return {*}
 */
export const ObjectPicker = (info: any, values: Array<string>) => {
  let _obj: {
    [proppname:string]: any
  } = {};
  values.map(item => {
    _obj[item] = info[item]
  })
  return _obj
}

/**
 * @description: 数组去重
 * @param {Array} values
 * @return {*}
 */
export const ArrayUnique = (values: Array<any>) => [...new Set(values)];

/**
 * @description: 数组并集
 * @param {Array} arrya
 * @param {Array} arryb
 * @return {*}
 */
export const ArrayUnion = (arrya: Array<any>, arryb: Array<any>) => ArrayUnique([...arrya, ...arryb]);

/**
 * @description: 数组交集
 * @param {Array} arrya
 * @param {Array} arryb
 * @return {*}
 */
export const ArrayIntersect = (arrya: Array<any>, arryb: Array<any>) => {
  const arr = ArrayUnique(arrya);
  return arr.filter(item=> isContains(arryb, item) && item)
}