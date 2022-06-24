 /**
  * @description: 类型判断
  * @param {any} value
  * @return {*}
  */
 export const CheckType = (value:any) => {
  if (!value) {
    throw new Error('Function checkType (...args:value) is invalid!');
  }
  switch (value.constructor) {
    case Array:
      return 'Array';
    case Object:
      return 'Object';
    case String:
      return 'String';
    case Function:
      return 'Function';
    case Number:
      return 'Number';
  }
 }

/**
 * @description: 类型校验
 * @param {any} arg
 * @param {Array | Object | String | Function | Number} _type
 * @returns {boolean}
 */
export const isType = (arg: any, _type: 'Array' | 'Object' | 'String' | 'Function' | 'Number'): boolean => arg.constructor === _type;

/**
 * @description: 是否为Array
 * @param {any} arg
 * @return {boolean}
 */
export const isArray = (arg: any): boolean => arg.constructor === Array;

/**
 * @description: 是否为Object
 * @param {any} arg
 * @return {boolean}
 */
export const isObject = (arg: any): boolean => arg.constructor === Object;

/**
 * @description: 是否为String
 * @param {any} arg
 * @return {boolean}
 */
export const isString = (arg: any): boolean => arg.constructor === String;

/**
 * @description: 是否为Function
 * @param {any} arg
 * @return {boolean}
 */
export const isFunc = (arg: any): boolean => arg.constructor === Function;

/**
* @arg  {* 数据} 
* @returns @Boolen
*/
export const isNumber = (arg: any): boolean => arg.constructor === Number;

/**
 * @description: 数组中是否包含某个元素
 * @param {Array} arry
 * @param {any} val
 * @param {string} level
 * @return {boolean}
 */
export const isContains = (arry: Array<any>, val: any, level?: string): boolean => {
  let hasEl:boolean = false;
  if (!level) {
    hasEl = arry.indexOf(val) !== -1;
  } else {
    hasEl = !!arry.find(item => item[level] === val);
  }

  return hasEl
}