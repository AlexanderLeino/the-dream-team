const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

describe('Creating a new object with the class Engineer which is an extension of the parent Class Employee', () => {
    it('Should return a new Engineer object. The objects key values pairs should be name: Alex, id: 1, email: Alexander.Leino@yahoo.com, github: https://github.com/AlexanderLeino', ()=> {
        const Alex = new Engineer('Alex', 1, 'Alexander.Leino@yahoo.com', 'https://github.com/AlexanderLeino')
        const expectedResult = {name: 'Alex', id: 1, email: 'Alexander.Leino@yahoo.com', github: 'https://github.com/AlexanderLeino' }
        expect(Alex).toEqual(expectedResult)
    })
})