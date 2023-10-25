function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

/**
 * @description: 获取当前时间
 * @param {string} type
 * @return {*}
 */
export const GetNowTime = (type: string = 'YYYYMMDDHHmmss'): string => {
  let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  const TimeObj: {
    [proppname: string]: any;
  } = {
    YYYYMMDDHHmmss: `${year}-${month}-${day} ${hour}:${minute}:${second}`,
    YYYYMMDD: `${year}-${month}-${day}`,
  };
  return TimeObj[type];
};
