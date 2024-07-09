/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let currentTime = 0
    let totalWaitTime = 0
     for(let i = 0; i < customers.length; i++){
        let arrivalTime = customers[i][0];
        let serviceTime = customers[i][1];

        currentTime = Math.max(currentTime, arrivalTime)
        let waitTime = currentTime - arrivalTime + serviceTime;
        totalWaitTime += waitTime;
        currentTime += serviceTime;
     }
    return totalWaitTime/customers.length
};