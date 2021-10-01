const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')
describe('Creating a new object with the class Intern which is an extension of the parent Class Employee', () => {
    it('Should return a new Intern object. The objects key values pairs should be name: Alex, id: 1, email: Alexander.Leino@yahoo.com, school: Western Michigan University', ()=> {
        const Alex = new Intern('Alex', 1, 'Alexander.Leino@yahoo.com', 'Western Michigan University')
        const expectedResult = {name: 'Alex', id: 1, email: 'Alexander.Leino@yahoo.com', school: 'Western Michigan University' }
        expect(Alex).toEqual(expectedResult)
    })
})