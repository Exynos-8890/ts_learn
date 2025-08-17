# 第一章：变量与基础类型（对比 Python/C++)

核心要点：
- JS 有 `let`、`const`、`var` 三种声明方式。日常使用建议 `const` 优先，其次 `let`；尽量避免 `var`。
- 动态类型：与 Python 类似，变量本身无固定类型；与 C++ 不同，C++ 是静态强类型（编译期确定）。
- 基本类型：`number`（包含整数与浮点数）、`string`、`boolean`、`null`、`undefined`、`bigint`、`symbol`。
- 数值只有 `number` 一种（IEEE 754 双精度），没有 Python 的 `int/float` 区分，也不同于 C++ 的 `int/double`。

示例：
```js
// 变量声明
const pi = 3.14159; // 常量，不可重新赋值
let counter = 0;    // 可变变量
// var 老代码中常见，函数作用域、会提升，不建议新代码使用

// 动态类型
let x = 42;       // number
x = "hello";     // 现在是 string

// null 与 undefined 的差异
let a;            // 声明未赋值 => undefined
let b = null;     // 有意赋予空值 => null
```

对比：
- Python：`a = 1`，同样是动态类型；但 `None` == JS 的 `null` 概念更近似。
- C++：`int a = 1;` 类型固定；JS 无需提前指定类型。

实践建议：
- 只要不需要重新赋值就用 `const`；需要才用 `let`。
- 避免 `var` 以防止作用域和提升带来的困惑。

练习连接：`exercises/01_variables.exercise.js`
