 /**
  * @description: 
  * @param {any} value
  * @return {*}
  */
 export const CheckType = (value:any) => {
  if (!value) {
    throw new Error('Function checkType (...args:value) is invalid!')
  }
  switch (value.constructor) {
    case Array:
      return 'Array'
    case Object:
      return 'Object'
    case String:
      return 'String'
    case Function:
      return 'Function'
    case Number:
      return 'Number'
  }
 }

/**
 * @arg {* 数据}  
 * @_type {* 类型}  
 * @returns @Boolen
 */
export const isType = (arg:any, _type:'Array' | 'Object' | 'String' | 'Function' | 'Number'):boolean => arg.constructor === _type

/**
* @arg {* 数据}  
* @returns @Boolen
*/
export const isArray = (arg:any):boolean => arg.constructor === Array

/**
* @arg {* 数据}  
* @returns @Boolen
*/
export const isObject = (arg:any):boolean => arg.constructor === Object

/**
* @arg {* 数据} 
* @returns @Boolen
*/
export const isString = (arg:any):boolean => arg.constructor === String

/**
* @arg {* 数据}  
* @returns @Boolen
*/
export const isFunc = (arg:any):boolean => arg.constructor === Function

/**
* @arg  {* 数据} 
* @returns @Boolen
*/
export const isNumber = (arg:any):boolean => arg.constructor === Number