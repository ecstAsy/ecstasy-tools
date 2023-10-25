// 常用方法
import { FunThrottle, FunDebounce } from './common/fun';
import { BlobExport, CopyTextToClipboard } from './common/blob';
import { ScrollToTop } from './common/scroll';
import {
  CheckType,
  isType,
  isArray,
  isObject,
  isString,
  isFunc,
  isNumber,
  isContains,
  isLeapYear,
} from './common/dataType';
import { MathTool } from './common/math';
import { GetRandomStr, GetRandomColor } from './common/random';
import { ChineseSort, NumberSort } from './common/sort';
import { LocalStorage, SessionStorage } from './common/storage';
import {
  ClearSpaceLine,
  GetQueryParam,
  GetUrlQuerys,
  GetArraySum,
  GetObjectFromArray,
  ObjectPicker,
  ArrayUnique,
  ArrayUnion,
  ArrayIntersect,
} from './common/process';
import {
  isAvailableEmail,
  isAvailablePhone,
  isAvailableUrl,
  isAvailableIdentity,
} from './common/regexp';

// 格式化方法
import {
  DecimalFloorFormatter,
  DecimalRoundFormatter,
  ThousandFormatter,
  NumberUppercaseFormatter,
} from './formatter/number';
import {
  MoneyUppercaseFormatter,
  MoneyThousandFormatter,
  MoneyPointFormatter,
} from './formatter/money';
import { GetNowTime } from './formatter/time';

import isColor from './is-color';

export {
  // 常用方法
  FunThrottle,
  FunDebounce,
  BlobExport,
  CopyTextToClipboard,
  ScrollToTop,
  CheckType,
  isType,
  isArray,
  isObject,
  isString,
  isFunc,
  isNumber,
  isContains,
  isLeapYear,
  MathTool,
  GetRandomStr,
  GetRandomColor,
  ChineseSort,
  NumberSort,
  LocalStorage,
  SessionStorage,
  ClearSpaceLine,
  GetQueryParam,
  GetUrlQuerys,
  GetArraySum,
  GetObjectFromArray,
  ObjectPicker,
  ArrayUnique,
  ArrayUnion,
  ArrayIntersect,
  isAvailableEmail,
  isAvailablePhone,
  isAvailableUrl,
  isAvailableIdentity,
  // 格式化方法
  DecimalFloorFormatter,
  DecimalRoundFormatter,
  ThousandFormatter,
  NumberUppercaseFormatter,
  MoneyUppercaseFormatter,
  MoneyThousandFormatter,
  MoneyPointFormatter,
  GetNowTime,
  isColor,
};
