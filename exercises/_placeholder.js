// 练习占位符：在未作答时保持语法正确，测试会据此标记为 todo。
export const __ = Symbol.for("EXERCISE_PLACEHOLDER");
export const isPlaceholder = (v) => v === __;
