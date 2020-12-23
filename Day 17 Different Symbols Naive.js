function differentSymbolsNaive(str) {
    output = 0
    alreadySeen = []
    for (i = 0; i < str.length; i++)
    {
        if (!alreadySeen.includes(str[i]))
        {
            alreadySeen.push(str[i])
            output++
        }
    }
    
    return output
}



/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});