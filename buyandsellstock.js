/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < min){
            min = prices[i];
        }
        if(result < prices[i] - min){
            result = prices[i] - min;
        }
    }
    return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));