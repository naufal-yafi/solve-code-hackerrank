export default function staircase(n) {
    
    let res = []
    let length = n -1

    for (let i = 0; i < n; i++) {
        let data = ""

        for (let j = 0; j < length; j++) {
            data += " "
        }
        
        for (let k = 0; k < n - length; k++) {
            data += "#"
        }

        length -= 
        
        res.push(data)
    }

    // res.forEach(i => console.log(i))
    
    /*
    !    Return is not allowed on this matter. 
    !    So just print the contents of the array results only like the code above 
    !    that has been commented out. And I use this return to do unit testing
    */
    return (res)

}