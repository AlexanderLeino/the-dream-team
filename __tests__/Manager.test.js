const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
describe('Creating a new object with the class Manager which is an extension of the parent Class Employee', () => {
    it('Should return a new Manager object. The objects key values pairs should be name: Alex, id: 1, email: Alexander.Leino@yahoo.com, officeNumber: 1231231234', ()=> {
        const Alex = new Manager('Alex', 1, 'Alexander.Leino@yahoo.com', '1231231234')
        const expectedResult = {name: 'Alex', id: 1, email: 'Alexander.Leino@yahoo.com', officeNumber: '1231231234' }
        expect(Alex).toEqual(expectedResult)
    })
})