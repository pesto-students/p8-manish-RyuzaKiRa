/* 
 * Problem 6.4 : Best time to buy and sell stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock andchoosing a
 * different day in the future to sell that stock.Return the maximum profit youcan achieve 
 * from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Example 1: 
 * Input: prices = [7,1,5,3,6,4] 
 * Output: 5 
 * Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5. 
 * Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell.
 * 
 * Example 2: 
 * Input: prices =[7,6,4,3,1] 
 * Output: 0 
 * Explanation: In this case, no transactions are done and the maxprofit = 0 
 * 
 * Constraints: 
 * 1 <= prices.length <= 105 
 * 0 <= prices[i] <= 104
 */

//Solution

function stockMarket(arr){
    let maxProfit = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            let currentProfit = arr[j] - arr[i];
            if(currentProfit > maxProfit && currentProfit > 0)
                maxProfit = arr[j] - arr[i];
        }
    }
    console.log(maxProfit);
}

function stockMarket2(arr){
    let maxProfit = 0;
    let bought = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(bought > arr[i])
            bought = arr[i];
        else if(arr[i] > bought){
            if(arr[i] - bought > maxProfit)
                maxProfit = arr[i] - bought;
        }
    }
    console.log(maxProfit);
}

const prices = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];

stockMarket2(prices);
stockMarket2(prices2);