let uniqueValuesArray: string [] = ['4', 'a', '3', 'k', '7', 'f'];

function randomArray(arrayNow: string [], num: number): string [] {
    if (arrayNow.length < num) {
        num = arrayNow.length;
    }
    let newArray: string [] = [];
    while (newArray.length !== num) {
        newArray = arrayNow.filter(el => {
            if (Math.round(Math.random())) {
                return el;
            }
        })
    }
    return newArray;
}

const endArray: string [] = randomArray(uniqueValuesArray, 3);
console.log(endArray);
console.log(endArray.length);