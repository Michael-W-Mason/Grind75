/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        // New Interval end does not overlap with current intervals start
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            return [...result, ...intervals.slice(i)];
        }
        // New Interval start does not overlap with current intervals end
        else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        }
        // New Interval is overlapping
        else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }
    result.push(newInterval);
    return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5]));