const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

const toRomans = (n) => {
  if (typeof (n) !== 'number') return 'Error, el valor no es un número'
  if (n <= 0 || n > 3999) return 'Error, te sales del rango'

  let roman = ''

  while (n > 0) {
    const index = values.findIndex(value => value <= n)

    roman += romans[index]

    n -= values[index]
  }
  return roman
}

module.exports = toRomans
