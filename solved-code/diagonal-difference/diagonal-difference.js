export default function diagonalDifference(arr) {
    
    let res = 0

    let a = 0, b = 0

    for (let i = 0; i < arr.length; i++) {

        let c = arr.length - 1

        if (i > 0) {
            c -= i
        }

        a += arr[i][i]
        b += arr[i][c]
        
    }

    res = b - a

    return res

}