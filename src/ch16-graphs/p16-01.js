// What is the edit distance between two strings?
export default function findPath(graph, start, end) {
  const [endY, endX] = end;
  const queue = [{ pos: start, path: [start] }];
  const explored = new Set();
  const exploreIfValid = (y, x, path) => {
    const pointType = (graph[y]) ? graph[y][x] : -1;
    const isExplored = explored.has(`${y},${x}`);
    if (pointType === 0 && !isExplored) {
      queue.push({ pos: [y, x], path: [...path, [y, x]] });
      explored.add(`${y},${x}`);
    }
  };

  while (queue.length > 0) {
    const { pos: [curY, curX], path } = queue.shift();
    if (curY === endY && curX === endX) {
      return path;
    }

    exploreIfValid(curY + 1, curX, path);
    exploreIfValid(curY - 1, curX, path);
    exploreIfValid(curY, curX + 1, path);
    exploreIfValid(curY, curX - 1, path);
  }

  return [];
}
