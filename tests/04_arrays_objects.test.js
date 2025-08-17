import { expect, test, describe } from "bun:test";
import { __ as ___, isPlaceholder } from "../exercises/_placeholder.js";
import { plusOne, evens, sum, getName, birthday } from "../exercises/04_arrays_objects.exercise.js";

describe("第四章：数组与对象", () => {
  const anyPlaceholderOutput = [
    plusOne([1]),
    evens([1]),
    sum([1]),
    getName({ name: "X" }),
    birthday({ name: "X", age: 1 }),
  ].some(isPlaceholder);
  if (anyPlaceholderOutput) {
    test.todo("请完成 04_arrays_objects.exercise.js", () => {});
    return;
  }

  test("plusOne", () => {
    expect(plusOne([1,2,3])).toEqual([2,3,4]);
  });

  test("evens", () => {
    expect(evens([1,2,3,4])).toEqual([2,4]);
  });

  test("sum", () => {
    expect(sum([1,2,3,4])).toBe(10);
  });

  test("getName", () => {
    expect(getName({ name: "Alan", age: 30 })).toBe("Alan");
  });

  test("birthday", () => {
    const u = { name: "Ada", age: 20 };
    const v = birthday(u);
    expect(v).toEqual({ name: "Ada", age: 21 });
    expect(u).toEqual({ name: "Ada", age: 20 }); // 不修改原对象
  });
});
