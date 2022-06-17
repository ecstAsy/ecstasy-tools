// 常用方法
import { checkType } from "./common/dataType";
import { MathTool } from "./common/math";
import { getRandomStr } from "./common/random"
import { SortChinese } from "./common/sort";
import { LocalStorage, SessionStorage } from "./common/storage"

// 格式化方法
import {
  DecimalFloorFormatter,
  DecimalRoundFormatter,
  ThousandFormatter, 
} from "./formatter/number";
import {
  MoneyUppercaseFormatter,
  MoneyThousandFormatter
} from "./formatter/money";

import isColor from "./is-color";

export {
  // 常用方法
  checkType,
  MathTool,
  getRandomStr,
  SortChinese,
  LocalStorage,
  SessionStorage,
  // 格式化方法
  DecimalFloorFormatter,
  DecimalRoundFormatter,
  ThousandFormatter,
  MoneyUppercaseFormatter,
  MoneyThousandFormatter,
  isColor,
}