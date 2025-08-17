# 第二章：控制流（if/else，比较，三元，switch）

核心要点：
- 比较运算：优先使用严格等于 `===` 和 `!==`，避免松等 `==` 带来的隐式类型转换陷阱。
- if/else 与 Python 语义类似，但块需要花括号；与 C++ 非常接近。
- 三元表达式：`cond ? a : b`，与 C++ 相同；Python 常用表达式 `a if cond else b`。
- switch：与 C++ 类似，但请记得加 `break` 防止贯穿（fall-through）。

示例：
```js
function grade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else return "C";
}

const same = (a, b) => a === b; // 严格相等

const parity = (n) => (n % 2 === 0 ? "even" : "odd");

function toWeekday(n) {
  switch (n) {
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    default:
      return "Other";
  }
}
```

注意：
- `==` 会进行类型转换，比如 `"1" == 1` 是 true；`===` 则为 false。建议总是用 `===`。

练习连接：`exercises/02_control_flow.exercise.js`
