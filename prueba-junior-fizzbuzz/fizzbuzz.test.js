const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => { 
    test('should print 1 if they receive 1 ', () => { 
        const expected = 1
        const result = fizzbuzz(1)
        expect(result).toBe(expected)
    })

    test('should print fizz if receive 3', () => { 
        const expected = "fizz"
        const result = fizzbuzz(3)
        expect(result).toBe(expected)
     })

     test('should print fizz if receive a multiple of 3', () => { 
        const expected = "fizz"
        const result = fizzbuzz(6)
        expect(result).toBe(expected)
     })

     test('should print buzz if receive a multiple of 5', ()=>{
        const expected = "buzz"
        const result = fizzbuzz(10)
        expect(result).toBe(expected)
     })

     test('should print fizzbuzz if receive a multiple of 5 and 3', () => {
        const expected = "fizzbuzz"
        const result = fizzbuzz(15)
        expect(result).toBe(expected)
     })

     test('should print error if receive something !== number', ()=>{
        const expected = "error"
        const result = fizzbuzz("a")
        expect(result).toBe(expected)
     })
 })