const { fizzbuzz, showSolution } = require('./index')

describe('testing fizzbuzz', () => {
  test('should return fizzbuzz n%3 and n%5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
  test('should return n%3 ', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  test('should return buzz n%5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })
  test('should return the number if dont return before', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
})

describe('testing showSolution', () => {
  test('should return an error if end is not between 1 and 100', () => {
    expect(showSolution(-15)).toBe('Error, solo valores entre 1 y 100')
  })
})
