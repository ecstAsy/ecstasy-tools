// 常用方法
import { FunThrottle, FunDebounce } from "./common/fun"
import { BlobExport } from "./common/blob";
import {
  CheckType,
  isType,
  isArray,
  isObject,
  isString,
  isFunc,
  isNumber
} from "./common/dataType";
import { MathTool } from "./common/math";
import { GetRandomStr, GetRandomColor } from "./common/random"
import { SortChinese } from "./common/sort";
import { LocalStorage, SessionStorage } from "./common/storage"
import {ClearSpaceLine} from "./common/process"

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
  FunThrottle,
  FunDebounce,
  BlobExport,
  CheckType,
  isType,
  isArray,
  isObject,
  isString,
  isFunc,
  isNumber,
  MathTool,
  GetRandomStr,
  GetRandomColor,
  SortChinese,
  LocalStorage,
  SessionStorage,
  ClearSpaceLine,
  // 格式化方法
  DecimalFloorFormatter,
  DecimalRoundFormatter,
  ThousandFormatter,
  MoneyUppercaseFormatter,
  MoneyThousandFormatter,
  isColor,
}