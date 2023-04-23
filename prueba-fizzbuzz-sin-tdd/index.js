const fizzbuzz = (n) => {
  if (n % 3 === 0 & n % 5 === 0) return 'fizzbuzz'

  if (n % 3 === 0) return 'fizz'

  if (n % 5 === 0) return 'buzz'

  return n
}

const showSolution = (end) => {
  if (end < 1 || end > 100) return 'Error, solo valores entre 1 y 100'

  for (let i = 1; i <= end; i++) {
    console.log(fizzbuzz(i))
  }
}

module.exports = { showSolution, fizzbuzz }

showSolution(100)
