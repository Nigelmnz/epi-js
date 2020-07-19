import Graph from "./graph.js";

describe("Graphs and Paths", () => {
    const graph = new Graph();
    it('can find the nearest "2" using BFS', () => {
        expect(graph.closestThingBFS([1, 1])).toEqual([6, 2]);
        expect(graph.closestThingBFS([1, 5])).toEqual([4, 7]);
    });

    it('can find every "2" using DFS', () => {
        expect(graph.allThingsDFS([1, 1]).length).toEqual(4);
    });

    it("can find the path from one point to another using A*", () => {
        expect(graph.pathAStar([1, 1], [2, 3]).length).toEqual(4);
        expect(graph.pathAStar([1, 1], [7, 8]).length).toEqual(14);
    });
});
