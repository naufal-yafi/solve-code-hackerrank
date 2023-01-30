export default function plusMinus(arr) {

    const res = []

    let positive = 0, negative = 0, zero = 0
    
    arr.forEach(i => {
        if (i > 0) {
            positive += 1
        } else if (i < 0) {
            negative += 1
        } else {
            zero += 1
        }
    })

    const findTypeNumber = [positive, negative, zero]

    findTypeNumber.forEach(i => {
        res.push((i/arr.length).toFixed(6))
    })

    // res.forEach(i => {
    //     console.log(i)
    // })

    /*
    !    Return is not allowed on this matter. 
    !    So just print the contents of the array results only like the code above 
    !    that has been commented out. And I use this return to do unit testing
    */
    return (res)

}