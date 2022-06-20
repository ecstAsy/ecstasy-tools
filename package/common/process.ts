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