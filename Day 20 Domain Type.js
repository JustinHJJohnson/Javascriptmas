function domainType(domains) {
    output = [];
    for (i = 0; i < domains.length; i++)
    {
        switch(domains[i].split(".").pop())
        {
            case "org":
                output.push("organization")
                break;
            case "com":
                output.push("commercial")
                break;
            case "net":
                output.push("network")
                break;
            case "info":
                output.push("information")
                break;
        }
    }
    
    return output
}



/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});