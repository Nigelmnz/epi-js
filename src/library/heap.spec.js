import Heap from "./heap.js";

describe("Heap", () => {
    let heap;
    beforeEach(() => {
        heap = new Heap();
    });
    it("handles insertion", () => {
        heap.insert(6);
        expect(heap.getData()).toEqual([6]);
    });
    it("handles insertion of two elements", () => {
        heap.insert(6);
        heap.insert(10);
        expect(heap.getData()).toEqual([10, 6]);
    });
    it("handles insertion of three elements", () => {
        heap.insert(6);
        heap.insert(10);
        heap.insert(4);
        expect(heap.getData()).toEqual([10, 6, 4]);
    });
    it("handles peeking at the max", () => {
        heap.insert(6);
        heap.insert(10);
        heap.insert(4);
        expect(heap.max()).toEqual(10);
    });
    it("handles removal of the max", () => {
        heap.insert(6);
        heap.insert(10);
        heap.insert(4);
        heap.insert(43);
        heap.removeMax();
        expect(heap.getData()).toEqual([10, 6, 4]);
    });
});
