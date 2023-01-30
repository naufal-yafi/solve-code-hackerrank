function staircase(n) {

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

        length -= 1
        res.push(data)
    }

    res.forEach(i => console.log(i))
    
}

staircase(4)