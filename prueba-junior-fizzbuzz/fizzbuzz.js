const fizzbuzz = ( n ) => {
    
    if(typeof(n) !== 'number') return "error"

    if(n % 3 === 0 && n % 5 === 0) return "fizzbuzz"

    if(n % 3 === 0) return "fizz"

    if(n % 5 === 0) return "buzz"

    return n
}

const printNumber = () => {
for (let index = 1; index <= 100; index++) {
    console.log(fizzbuzz(index))  
}
}

printNumber()



module.exports = fizzbuzz