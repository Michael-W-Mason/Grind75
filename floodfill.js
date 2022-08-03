/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, original=image[sr][sc]) {
    if(sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[0].length - 1){
        return image;
    }
    else if(image[sr][sc] === color){
        return image;
    }
    else if(image[sr][sc] !== original){
        return image;
    }
    else{
        image[sr][sc] = color;
    }
    floodFill(image, sr + 1, sc, color, original);
    floodFill(image, sr - 1, sc, color, original);
    floodFill(image, sr, sc + 1, color, original);
    floodFill(image, sr, sc - 1, color, original);
    return image;
};

let img = [[1,1,1],[1,1,0],[1,0,1]];
console.log(floodFill(img, 1, 1, 2));