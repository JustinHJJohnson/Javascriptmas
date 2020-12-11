Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Example
   chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
   chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]

function chunkyMonkey(values, size) {
    var numChunks = Math.ceil(values.length / size);
    var output = [numChunks]
    
    for (i = 0; i < numChunks; i++)
    {
        output[i] = values.slice(0 + (i * size), size + (i * size))
    }
    
    return output;
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});