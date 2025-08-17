import { expect, test, describe } from "bun:test";
import { __ as ___, isPlaceholder } from "../exercises/_placeholder.js";
import { sumTo, copy, countPositive } from "../exercises/05_loops.exercise.js";

describe("第五章：循环", () => {
  const anyPlaceholderOutput = [sumTo(0), copy([]), countPositive([])].some(isPlaceholder);
  if (anyPlaceholderOutput) {
    test.todo("请完成 05_loops.exercise.js", () => {});
    return;
  }

  test("sumTo", () => {
    expect(sumTo(5)).toBe(15);
  });

  test("copy", () => {
    expect(copy([1,2,3])).toEqual([1,2,3]);
  });

  test("countPositive", () => {
    expect(countPositive([-1,0,1,2])).toBe(2);
  });
});
