const RegExpMaps: {
  [proppname:string]: RegExp
} = {
  email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
  phone: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
  url: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
  identity: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
}

/**
 * @description: 是否有效的email
 * @param {string} email
 * @return {*}
 */
export const isAvailableEmail = (email: string): boolean => RegExpMaps.email.test(email);

/**
 * @description: 是否有效的手机号
 * @param {string} phone
 * @return {*}
 */
export const isAvailablePhone = (phone: string): boolean => RegExpMaps.phone.test(phone);

/**
 * @description: 是否有效的url
 * @param {string} url
 * @return {*}
 */
export const isAvailableUrl = (url: string): boolean => RegExpMaps.email.test(url);

/**
 * @description: 是否有效的身份证号码
 * @param {string} identity
 * @return {*}
 */
export const isAvailableIdentity = (identity: string):boolean => RegExpMaps.email.test(identity);