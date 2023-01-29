export default function compareTriplets(a, b) {
    
    let bob = 0, alice = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice += 1
        } else  if (a[i] < b[i]) {
            bob += 1
        }
    }

    return [alice, bob]

}