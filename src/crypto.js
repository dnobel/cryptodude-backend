var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();

function getTop10Coins() {
    return new Promise(
        (resolve, reject) => {
            coinmarketcap.multi(coins => {
                resolve(coins.getTop(10));
            }, error => {
                reject(error);
            });
        }
    );   
}

function findMostPercentChangeIn24h(coins) {
    return coins.sort((a,b) => {
        return parseFloat(a.percent_change_24h) < parseFloat(b.percent_change_24h);
    })[0];
}


exports.getHint = () => {
    return new Promise(
        (resolve, reject) => {
            getTop10Coins().then(coins => {
                var result = findMostPercentChangeIn24h(coins);
                var coin = {
                    "name": result.name,
                    "change": result.percent_change_24h,
                    "rank": result.rank,
                }
                resolve(coin);
            }, error => {
                reject(error);
            });
    }); 
}

