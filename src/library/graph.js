import MaxHeap from './heap.js';

export default class Graph {
  constructor() {
    this.data = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 2, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
      [1, 1, 2, 1, 2, 0, 1, 0, 0, 0, 2, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  }

  closestThingBFS([starty, startx]) {
    const queue = [[starty, startx]];
    const visited = new Set();
    if (this.data[starty][startx] === 1) {
      return [-1, -1];
    }
    while (queue.length > 0) {
      const [y, x] = queue.shift();
      const type = this.data[y][x];
      visited.add(`${[y, x]}`);
      if (type === 2) {
        return [y, x];
      }
      // Add children to queue
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (Math.abs(i) !== Math.abs(j)) {
            const [nY, nX] = [y + i, x + j];
            const nType = this.data[nY][nX];
            if (nType !== undefined && nType !== 1 && !visited.has(`${[nY, nX]}`)) {
              queue.push([nY, nX]);
            }
          }
        }
      }
    }
    return [-1, -1];
  }

  allThingsDFS([starty, startx]) {
    const stack = [[starty, startx]];
    const visited = new Set();
    const results = [];
    const pushIfValid = ([nY, nX]) => {
      const nextVal = this.data[nY][nX];
      if (nextVal !== undefined && nextVal !== 1) {
        stack.push([nY, nX]);
      }
    };

    while (stack.length > 0) {
      const [y, x] = stack.pop();
      const value = this.data[y][x];
      if (!visited.has(`[${y},${x}]`)) {
        visited.add(`[${y},${x}]`);
        if (value === 2) {
          results.push({ y, x });
        }
        pushIfValid([y + 1, x]);
        pushIfValid([y - 1, x]);
        pushIfValid([y, x + 1]);
        pushIfValid([y, x - 1]);
      }
    }

    return results;
  }

  heuristic([startY, startX], [endY, endX]) {
    // Return the manhattan distance
    return Math.abs(startY - endY) + Math.abs(startX - endX);
  }

  pathAStar([startY, startX], [endY, endX]) {
    const queue = new MaxHeap();
    const costs = new Map();
    const insertIfValid = ([nY, nX], [y, x], path) => {
      const nextVal = this.data[nY][nX];
      const newCost = costs.get(`[${y},${x}]`) + 1;
      const nextCost = costs.get(`[${nY},${nX}]`);
      if (nextVal !== undefined && nextVal !== 1 &&
         (nextCost === undefined || newCost < nextCost)) {
        const newPath = [...path, [nY, nX]];
        const newData = { point: [nY, nX], path: newPath };
        const priority = this.heuristic([startY, startX], [endY, endX]) + newCost;
        costs.set(`[${nY},${nX}]`, newCost);
        queue.insert(-1 * priority, newData);
      }
    };

    queue.insert(0, { point: [startY, startX], path: [[startY, startX]] });
    costs.set(`[${startY},${startX}]`, 0);

    while (queue.getData().length > 0) {
      const { point: [y, x], path } = queue.removeMax();
      if (y === endY && x === endX) {
        console.log(path);
        return path;
      }

      // Consider each neighbor
      insertIfValid([y + 1, x], [y, x], path);
      insertIfValid([y - 1, x], [y, x], path);
      insertIfValid([y, x + 1], [y, x], path);
      insertIfValid([y, x - 1], [y, x], path);
    }

    return [];
  }

}
