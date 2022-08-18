/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let INF = m + n;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 0) continue;
            let top = INF;
            let left = INF;
            if (r - 1 >= 0) top = mat[r - 1][c];
            if (c - 1 >= 0) left = mat[r][c - 1];
            mat[r][c] = Math.min(top, left) + 1;
        }
    }

    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            if (mat[r][c] === 0) continue;
            let bottom = INF;
            let right = INF;
            if (r + 1 < m) bottom = mat[r + 1][c];
            if (c + 1 < n) right = mat[r][c + 1];
            mat[r][c] = Math.min(mat[r][c], Math.min(bottom, right) + 1);
        }
    }
    return mat;
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));