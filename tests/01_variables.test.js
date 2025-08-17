import { expect, test, describe } from "bun:test";
import { __ as ___, isPlaceholder } from "../exercises/_placeholder.js";
import { pi, counter, a, b, x, isJSFun } from "../exercises/01_variables.exercise.js";

const todoIf = (cond, name) => {
  if (cond) {
    test.todo(name, () => {});
    return true;
  }
  return false;
};

describe("第一章：变量与类型", () => {
  const hasPlaceholders = [pi, counter, a, b, x, isJSFun].some(isPlaceholder);
  if (todoIf(hasPlaceholders, "请完成 01_variables.exercise.js 所有填空")) return;

  test("pi 是 3.14（或误差很小的近似）", () => {
    expect(Math.abs(pi - 3.14) < 1e-6).toBeTrue();
  });

  test("counter 已自增为 1", () => {
    expect(counter).toBe(1);
  });

  test("a 是 undefined", () => {
    expect(a).toBeUndefined();
  });

  test("b 是 null", () => {
    expect(b).toBeNull();
  });

  test("x 是字符串 '42'", () => {
    expect(typeof x).toBe("string");
    expect(x).toBe("42");
  });

  test("isJSFun 为 true", () => {
    expect(isJSFun).toBeTrue();
  });
});
