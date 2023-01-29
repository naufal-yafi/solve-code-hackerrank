import compareTriplets from './compare-the-triplets'

test('test case 0', () => { 

    const res = compareTriplets([5,6,7],[3,6,10]).join(" ")

    expect(res).toBe('1 1')

 })

test('test case 1', () => { 

    const res = compareTriplets([17,28,30],[99,16,8]).join(" ")

    expect(res).toBe('2 1')

 })