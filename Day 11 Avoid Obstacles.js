function avoidObstacles(nums) {
    solutionFound = false
    numToTry = 2
    nums.sort()
    while(!solutionFound)
    {
        solutionFound = true
        currentIndex = 0
        for (i = 0; i < nums.length; i++)
        {
            if (nums[i] % numToTry == 0) solutionFound = false
        }
        
        numToTry++
    }
    
    return numToTry - 1
}



/**
* Test Suite 
*/
describe('avoidObstacles()', () => {
    it('returns minimal number of jumps in between numbers', () => {
        // arrange
        const nums = [5, 3, 6, 7, 9];
        
        // act
        const result = avoidObstacles(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});