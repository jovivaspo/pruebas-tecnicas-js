const solution = require('./fancyRide')

const fares = [0.3, 0.5, 0.7, 1, 1.3]
const options = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']

describe('testing fancyRide', () => {
  test('should return error if l less than 4 or more than 30', () => {
    const error = 'Error, la distancia debe estar entre 4 y 30'
    const l = 3
    const credit = 20
    const result = solution(l, fares, credit)
    expect(result).toBe(error)
  })
  test('should return the first option because you have little money', () => {
    const l = 30
    const credit = 10
    const result = solution(l, fares, credit)
    const expected = options[0]
    expect(result).toBe(expected)
  })
  test('should return the first option because you have little money', () => {
    const l = 30
    const credit = 20
    const result = solution(l, fares, credit)
    const expected = 'UberXL'
    expect(result).toBe(expected)
  })
})
