
// duplicates number is here 
const numbers = [ 40,12,54,55,65,54,33,77,87,54,77,40];

//function 
function doubleNumber (numbers){

    //set defualt values
    const newNumber = [];
    for( const element of numbers){
        //check double number with if condition
        if(newNumber.indexOf(element) == -1){
            //push new number 
            newNumber.push(element);
        }
    }
    return newNumber;
}

const doubleNum = doubleNumber(numbers);
console.log(doubleNum);