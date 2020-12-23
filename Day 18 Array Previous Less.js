function arrayPreviousLess(nums) {
    output = []
    minFound = false
    
    for (i = 0; i < nums.length; i++)
    {
        for (j = i - 1; 0 <= j; j--)
        {
            if (nums[i] > nums[j] && !minFound) 
            {
                output.push(nums[j])
                minFound = true
            }
        }
        
        if (!minFound) output.push(-1)
        
        minFound = false
    }
    
    return output
}



/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});