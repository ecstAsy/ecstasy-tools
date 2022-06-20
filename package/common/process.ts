/**
 * @description: 去除空格和换行
 * @param {string} value
 * @return {*}
 */
export const ClearSpaceLine = (value: string): string => value.replace(/\ +/g, "").replace(/[\r\n]/g, "");
