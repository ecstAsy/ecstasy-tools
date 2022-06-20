/**
 * @description: 中文字符排序
 * @param {*} arr
 * @param {*} dataLeven
 * @return {*}
 */
export const ChineseSort = (arr, dataLeven) => {
  /* 获取数组元素内需要比较的值 */
  function getValue(option) {
    if (!dataLeven) return option;
    let data = option;

    dataLeven.split('.').filter(item => {
      data = data[item];
    });
    return `${data}`;
  }
  arr.sort((item1, item2) => getValue(item1).localeCompare(getValue(item2), 'zh-CN'));
}

/**
 * @description: 数组排序
 * @param {Array} arr
 * @param {*} type min = 从小到大 max = 从大到小 random = 随机排序
 * @return {*}
 */
export const NumberSort = (arr:Array<number>, type:'min' | 'max' | 'random' = 'min') => {
  return arr.sort((a, b) => {
    switch (type) {
        case 'min':
            return a - b;
        case 'max':
            return b - a;
        case 'random':
            return Math.random() - 0.5;
        default:
          break;
    }
  })
}