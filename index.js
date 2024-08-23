// Code your solutions in this file
function countDown (integer) {
    
    while (integer > -1) {
    
    console.log(integer)
    integer--
    }
}

function writeCards (array, event) {
    let newArray = []
    for (let i=0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

    }
    return newArray
}