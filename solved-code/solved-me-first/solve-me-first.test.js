import solveMeFirst from './solve-me-first'

test('test case 0', () => { 

    const res = solveMeFirst(2,3)

    expect(res).toBe(5)

 })

test('test case 1', () => { 

    const res = solveMeFirst(100,1000)

    expect(res).toBe(1100)

 })