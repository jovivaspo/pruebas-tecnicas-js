const options = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
const credit = 20
const fares = [0.3, 0.5, 0.7, 1, 1.3]
const solution = (l, fares, credit) => {
  if (l < 4 || l > 30) return 'Error, la distancia debe estar entre 4 y 30'

  const indexTrip = fares.map(cost => cost * l).findLastIndex(el => el <= credit)
  return options[indexTrip]
}

console.log(solution(2, fares, credit))

module.exports = solution
