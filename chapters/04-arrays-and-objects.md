# 第四章：数组与对象（对比 Python/C++)

核心要点：
- 数组 `[]` 类似 Python list，支持 `push/pop/map/filter/reduce` 等；C++ 类似 `std::vector`（但 JS 动态类型）。
- 对象 `{}` 是键值映射，类似 Python dict；C++ 可类比 `std::unordered_map<std::string, T>`。
- 展开与解构：`...` 展开对象/数组，解构赋值快速取值。

示例：
```js
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);

const user = { name: "Ada", age: 20 };
const { name, age } = user; // 解构

const arr2 = [...arr, 4];
const user2 = { ...user, age: 21 };
```

练习连接：`exercises/04_arrays_objects.exercise.js`
