/* eslint-disable camelcase */
const solution = (ride_time, ride_distance, cost_per_minute, cost_per_mile) => {
  return cost_per_mile.map((cost, index) => {
    // eslint-disable-next-line camelcase
    const costTrip = (cost * ride_distance + cost_per_minute[index] * ride_time)
    return costTrip % 1 === 0 ? costTrip : costTrip.toFixed(1)
  })
}

const ride_time = 30
const ride_distance = 7
const cost_per_minute = [0.2, 0.35, 0.4, 0.45]
const cost_per_mile = [1.1, 1.8, 2.3, 3.5]

console.log(solution(ride_time, ride_distance, cost_per_minute, cost_per_mile))

module.exports = solution
