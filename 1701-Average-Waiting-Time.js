/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let totalWaitTime = 0
    let currentTime = 0
    for(let i = 0; i < customers.length; i++){
        let arrivalTime = customers[i][0]
        let serviceDuration = customers[i][1]

        currentTime = Math.max(currentTime, arrivalTime)
        totalWaitTime += currentTime - arrivalTime + serviceDuration
        currentTime += serviceDuration
    }
    return totalWaitTime/customers.length
};