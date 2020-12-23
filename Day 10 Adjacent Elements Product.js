function adjacentElementsProduct(nums) {
    maxProduct = 0
    for (i = 1; i < nums.length; i++)
    {
        (nums[i] * nums[i - 1] > maxProduct) && (maxProduct = nums[i] * nums[i - 1]) 
    }
    
    return maxProduct
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});