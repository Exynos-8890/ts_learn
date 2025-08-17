// 第三章练习：函数与作用域
// 把 ___ 替换为正确实现。
import { __ as ___ } from "./_placeholder.js";

// 1) 写一个加法函数 add(a, b) 返回两数之和
export function add(a, b) {
  return ___;
}

// 2) 写一个箭头函数 mul，返回两数乘积
export const mul = ___;

// 3) 写一个工厂函数 makeAdder(delta)，返回一个函数 f(x)=x+delta（闭包）
export function makeAdder(delta) {
  return ___;
}

// 4) 演示块级作用域：函数返回 true 表示外层看不到块内变量
export function blockScopeWorks() {
  let outerSeesInner = false;
  {
    const hidden = 123;
    // 这里能看到 hidden
    if (hidden === 123) {
      // no-op
    }
  }
  try {
    // 这里访问 hidden 应该抛错，从而保持 outerSeesInner = false
    // 你可以简单地不访问 hidden，让 outerSeesInner 保持 false
  } catch {
    outerSeesInner = true;
  }
  return !outerSeesInner;
}
