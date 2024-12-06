// Code your solutions in this file
function countDown (number) {
    
    for (let i= number; i >-1; i--) {
    console.log(i)
    
    }
}

function writeCards (array) {
    let newArray = []
    
    for (let name in array) {
       newArray.push(`Thank you, ${array[name]}, for the wonderful surprise gift!`)
    }
    return newArray
}