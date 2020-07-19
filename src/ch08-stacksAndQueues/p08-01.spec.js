import MaxStack from "./p08-01.js";

describe("Max Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new MaxStack();
    });

    it("handles one element", () => {
        stack.push(5);
        expect(stack.max()).toEqual(5);
    });

    it("handles three elements", () => {
        stack.push(5);
        stack.push(10);
        stack.push(8);
        expect(stack.max()).toEqual(10);
    });

    it("handles removal of elements", () => {
        stack.push(5);
        stack.push(8);
        stack.push(5);
        stack.push(10);
        stack.pop();
        expect(stack.max()).toEqual(8);
    });
});
