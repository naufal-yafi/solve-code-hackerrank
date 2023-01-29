export default function diagonalDifference(arr) {
    
    let res = 0

    let a = 0, b = 0

    for (let i = 0; i < arr.length; i++) {
        
        a += arr[i][i]
        b += arr[i][(arr.length - 1) - i]

    }

    res = (a-b) < 0 ? (a-b)*-1 : a-b 

    return res

}