function extractMatrixColumn(matrix, column) {
    output = []
    for (i = 0; i < matrix.length; i++) output.push(matrix[i][column])
    return output 
}



/**
* Test Suite 
*/
describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        
        // act
        const result = extractMatrixColumn(matrix, column);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 0, 3]);
    });
});