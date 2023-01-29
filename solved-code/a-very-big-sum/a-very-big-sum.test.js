import aVeryBigSum from './a-very-big-sum'

test('test case 0', () => { 

    const res = aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])

    expect(res).toBe(5000000015)

 })