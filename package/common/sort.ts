// 中文字符排序
const SortChinese = (arr, dataLeven) => {
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

export default SortChinese