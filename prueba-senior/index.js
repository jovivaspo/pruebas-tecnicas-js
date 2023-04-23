
const p = {
  name: 'Jorge',
  hello: () => `Hello ${p.name}`
}

p.name = 'Francisco'
p.hello()

const citiesList = [
  'nashville',
  'nashville',
  'los angeles',
  'nashville',
  'memphis',
  'barcelona',
  'los angeles',
  'sevilla',
  'madrid',
  'canary',
  'barcelona',
  'madrid',
  'nashville',
  'barcelona',
  'london',
  'berlin',
  'madrid',
  'nashville',
  'madrid',
  'london'
]

const shortCities = (listOfCities) => {
  const objectCities = {}

  listOfCities.forEach(city => {
    objectCities[city] = !objectCities[city] ? 1 : objectCities[city] + 1
  })

  return Object.keys(objectCities)
    .map(city => ({ city, value: objectCities[city] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
    .map(el => el.city)
}

module.exports = { shortCities, p, citiesList }
