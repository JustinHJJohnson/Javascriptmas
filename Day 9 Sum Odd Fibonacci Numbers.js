function sumOddFibonacciNumbers(num) {
    sum = 2;
    previousNums = [1, 1];
    currentNum = 0;
    
    while(previousNums[0] + previousNums[1] <= num)
    {
        currentNum = previousNums[0] + previousNums[1];
        previousNums[0] = previousNums[1];
        previousNums[1] = currentNum;
        (currentNum % 2 !== 0) && (sum += currentNum);
    }

    return sum
}



/**
* Test Suite 
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});