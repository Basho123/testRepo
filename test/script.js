let mkCoinDenominations = [50, 10, 5, 2, 1]
let totalCoins = 0;

let i = 0;

function howManyCoins(userInputAmount, coinsArray){
    for(i = 0; i < coinsArray.length; i++){
        while(userInputAmount - coinsArray[i] >= 0){
            totalCoins ++;
            userInputAmount -= coinsArray[i];
        }
    }
    return totalCoins;
}

console.log(howManyCoins(1555, mkCoinDenominations));