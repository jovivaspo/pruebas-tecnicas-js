const { shortCities, p, citiesList } = require('./index')

describe('test en problema 1', () => {
  test('should return hello name', () => {
    const name = 'Jorge'
    const expected = `Hello ${name}`
    p.name = name
    const result = p.hello()
    expect(result).toBe(expected)
  })
})

describe('test en problema 2', () => {
  test('should return an array', () => {
    const result = shortCities(citiesList)
    expect(result).toBeInstanceOf(Array)
  })
  test('should return an array with 5 elements', () => {
    const length = shortCities(citiesList).length
    expect(length).toBe(5)
  })
})
