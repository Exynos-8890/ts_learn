import { expect, test, describe } from "bun:test";
import { __ as ___, isPlaceholder } from "../exercises/_placeholder.js";
import { add, mul, makeAdder, blockScopeWorks } from "../exercises/03_functions.exercise.js";

describe("第三章：函数与作用域", () => {
  const safeMul = typeof mul === "function" ? mul(1,1) : ___;
  const maybeAdder = typeof makeAdder === "function" ? makeAdder(0) : null;
  const safeAdder = typeof maybeAdder === "function" ? maybeAdder(0) : ___;
  const anyPlaceholderOutput = [add(0,0), safeMul, safeAdder].some(isPlaceholder);
  if (anyPlaceholderOutput) { test.todo("请完成 03_functions.exercise.js", () => {}); return; }

  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("mul", () => {
    expect(mul(2, 4)).toBe(8);
  });

  test("makeAdder", () => {
    const inc3 = makeAdder(3);
    expect(inc3(7)).toBe(10);
  });

  test("block scope", () => {
    expect(blockScopeWorks()).toBeTrue();
  });
});
