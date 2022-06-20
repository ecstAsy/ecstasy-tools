// 常用方法
import { FunThrottle, FunDebounce } from "./common/fun"
import { BlobExport } from "./common/blob";
import { CheckType } from "./common/dataType";
import { MathTool } from "./common/math";
import { GetRandomStr, GetRandomColor } from "./common/random"
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
  FunThrottle,
  FunDebounce,
  BlobExport,
  CheckType,
  MathTool,
  GetRandomStr,
  GetRandomColor,
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