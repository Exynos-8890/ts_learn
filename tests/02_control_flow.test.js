import { expect, test, describe } from "bun:test";
import { __ as ___, isPlaceholder } from "../exercises/_placeholder.js";
import { isSame, grade, parity, toWeekday } from "../exercises/02_control_flow.exercise.js";

const todoIf = (cond, name) => {
  if (cond) {
    test.todo(name, () => {});
    return true;
  }
  return false;
};

describe("第二章：控制流", () => {
  const anyPlaceholderOutput = [
    isSame(1, 1),
    grade(0),
    parity(0),
    toWeekday(0),
  ].some(isPlaceholder);
  if (todoIf(anyPlaceholderOutput, "请完成 02_control_flow.exercise.js")) return;

  test("严格相等", () => {
    expect(isSame(1, 1)).toBeTrue();
    expect(isSame("1", 1)).toBeFalse();
    expect(isSame(true, 1)).toBeFalse();
  });

  test("分数等级", () => {
    expect(grade(95)).toBe("A");
    expect(grade(85)).toBe("B");
    expect(grade(70)).toBe("C");
  });

  test("奇偶", () => {
    expect(parity(2)).toBe("even");
    expect(parity(3)).toBe("odd");
  });

  test("星期", () => {
    expect(toWeekday(1)).toBe("Mon");
    expect(toWeekday(2)).toBe("Tue");
    expect(toWeekday(7)).toBe("Other");
  });
});
