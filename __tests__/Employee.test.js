const Employee = require('../lib/Employee')

describe('creating a new Employee object with the name of the new employee being Alex', () => {
    it('should return an a new employee object with a key of name with a value of Alex assigned to it. As well as id key with a value of 1 and an email key with a value of Alexander.Leino@yahoo.com', ()=> {
        const Alex = new Employee('Alex', 1, 'Alexander.Leino@yahoo.com')
        const expectedResult = {name: 'Alex',id: 1, email: 'Alexander.Leino@yahoo.com'}
        expect(Alex).toEqual(expectedResult)
    })

})
