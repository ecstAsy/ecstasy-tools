# 🚀 前端常用方法

#### 类型判断
***checkType***
```js
checkType("3");     // String
checkType(3);       // Number
checkType([]);      // Array
checkType({});      // Object
checkType(()=>{});  // Function
```
#### 加减乘除（浮点类型）
***MathTool***
```js
// 加
MathTool.add(1, 2);          // 3
// 减
MathTool.subtract(1, 2);     // -1
// 乘
MathTool.multiply(1, 2);     // 2
// 除
MathTool.divide(1, 2);       // 0.5
```
#### 数值格式化
- ***DecimalFloorFormatter*** 下舍入
```js
DecimalFloorFormatter(1.345, 2);    // 1.34
```
- ***DecimalRoundFormatter*** 上舍入
```js
DecimalRoundFormatter(1.345, 2);    // 1.35
```
- ***ThousandFormatter*** 千分位格式化
```js
ThousandFormatter(22134.67895)  // 22,134.67,895
```

#### 金额格式化
- ***MoneyUppercaseFormatter*** 小写转大写
```js
MoneyUppercaseFormatter(10.34)   // 壹拾元叁角肆分
```