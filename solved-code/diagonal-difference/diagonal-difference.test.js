import diagonalDifference from './diagonal-difference'

test('test case 0', () => { 

    const res = diagonalDifference([
        [11,2,4],
        [4,5,6],
        [10,8,-12]
    ])

    expect(res).toBe(15)

 })