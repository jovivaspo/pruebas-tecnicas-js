const solution = require('./paddock')

describe('Testing paddock', () => {
  test('should return an array of object', () => {
    expect(solution()).toBeInstanceOf(Array)
    expect(solution()[0]).toBeInstanceOf(Object)
  })
  test('should return array of objects with the prop cuantity', () => {
    expect(solution()[0]).toHaveProperty('cuantity')
  })
  test('should return array of objects sort by cuantity desc', () => {
    const result = solution()

    expect(result[0].cuantity < result[1].cuantity).toBeTruthy()
    expect(result[1].cuantity < result[2].cuantity).toBeTruthy()
    expect(result[2].cuantity < result[3].cuantity).toBeTruthy()
  })
})
