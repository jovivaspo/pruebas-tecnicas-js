const toRomans = require('./to-romans')

describe('Testing toRomans', () => {
  test('should return an error if n is not a number or n is not between 0 and 3999', () => {
    expect(toRomans('Hola')).toBe('Error, el valor no es un número')
    expect(toRomans(0)).toBe('Error, te sales del rango')
    expect(toRomans(4000)).toBe('Error, te sales del rango')
  })
  test('should return an string', () => {
    expect(typeof toRomans(1000)).toBe('string')
  })
})
