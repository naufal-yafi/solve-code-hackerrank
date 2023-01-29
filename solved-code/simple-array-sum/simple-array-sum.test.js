import simpleArraySum from './simple-array-sum'

test('test case 0', () => { 
    
    const res = simpleArraySum([1,2,3,4,10,11])

    expect(res).toBe(31)

 })