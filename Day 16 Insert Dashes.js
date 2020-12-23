function insertDashes(arr) {
    output = arr.split("")
    for (i = 0; i < output.length - 1; i++)
    {
        if(output[i] != " " && output[i + 1] != " ")
        {
            output.splice(i + 1, 0, "-")
            i++
        }
    }

    return output.join("")
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});