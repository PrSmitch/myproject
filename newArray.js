const uniqueValuesArray = ['4', 'a', '3', 'k', '7', 'f']

function randomArray(arrayNow, num) {
    if (arrayNow.length < num) {
        num = arrayNow.length
    }
    let newArray = []
    while (newArray.length !== num) {
        newArray = arrayNow.filter(el => {
            if (Math.round(Math.random())) {
                return el
            }
        })
    }
    return newArray
}

const endArray = randomArray(uniqueValuesArray, 3)
console.log(endArray);
console.log(endArray.length);