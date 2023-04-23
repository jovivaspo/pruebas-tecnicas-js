/* eslint-disable camelcase */
const solution = require('./estimator')
const ride_time = 30
const ride_distance = 7
const cost_per_minute = [0.2, 0.35, 0.4, 0.45]
const cost_per_mile = [1.1, 1.8, 2.3, 3.5]

describe('estimator', () => {
  test('stimator return array', () => {
    const result = solution(ride_time, ride_distance, cost_per_minute, cost_per_mile)
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toBe('13.7')
  })
})
