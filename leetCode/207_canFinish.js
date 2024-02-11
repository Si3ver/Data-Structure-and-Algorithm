/**
 * https://leetcode.cn/problems/course-schedule/
 * 课程表
 * medium
 */

var canFinish = function (numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  const adjTable = new Map();
  for (let i = 0; i < prerequisites.length; ++i) {
    const [to, from] = prerequisites[i];
    ++inDegree[to];
    if (adjTable.has(from)) {
      adjTable.get(from).push(to);
    } else {
      adjTable.set(from, [to]);
    }
  }
  const queue = [];
  for (let i = 0; i < inDegree.length; ++i) {
    if (inDegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while (queue.length) {
    ++count;
    const selected = queue.shift();
    const toList = adjTable.get(selected);
    if (toList && toList.length) {
      for (const toItem of toList) {
        --inDegree[toItem];
        if (inDegree[toItem] === 0) {
          queue.push(toItem);
        }
      }
    }
  }
  return count === numCourses;
};

// ----
console.log(canFinish(2, [[1, 0]]));
