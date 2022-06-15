/**
 * 类型判断
 * @value {* 数据}  
 * @returns @string
 */
 export const checkType = (value:any) => {
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