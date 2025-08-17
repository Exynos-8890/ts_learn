# 第五章：循环（for, for...of, while）

核心要点：
- `for` 经典三段式与 C++ 类似；`for...of` 迭代可迭代对象（数组等）。
- 避免使用 `for...in` 遍历数组（那是枚举键，可能包含原型链属性）。
- `while` 与 Python/C++ 类似。

示例：
```js
for (let i = 0; i < 3; i++) {
  // ...
}

for (const x of [1,2,3]) {
  // ...
}

let n = 3;
while (n > 0) {
  n--;
}
```

练习连接：`exercises/05_loops.exercise.js`
