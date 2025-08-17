# 第三章：函数与作用域（对比 Python/C++)

核心要点：
- 函数声明两种常见写法：函数声明 `function f(){}` 与箭头函数 `const f = () => {}`。
- 作用域：`let/const` 是块级作用域；`var` 是函数作用域（避免）。
- `this` 绑定与 Python/C++ 不同，箭头函数不绑定自己的 `this`。
- 闭包：与 Python 类似，函数可以捕获外层变量；与 C++ 的 lambda 捕获类似但语义不同。

示例：
```js
function add(a, b) { return a + b; }
const mul = (a, b) => a * b;

function makeAdder(delta) {
  return (x) => x + delta; // 闭包捕获 delta
}

{
  let x = 1; // 块级作用域
  // x 在块外不可见
}
```

练习连接：`exercises/03_functions.exercise.js`
