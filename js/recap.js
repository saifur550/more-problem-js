// smallest number finding in array
function smallestElememt (number){
    let smallNumber = number[0];

    for(let i = 0; i <= number.length; i ++ ){
        const element = number[i];
        if( element < smallNumber){
            smallNumber = element;
        }
    } return smallNumber;
} 

let item =smallestElememt([34, 43, 23, 5, 12, 56]);
console.log(item);





// largest number finding in array

function largestElememt (number){
    let largeNumber = number[0];

    for(let i = 0; i <= number.length; i ++ ){
        const element = number[i];
        if( element > largeNumber){
            largeNumber = element;
        }
    } return largeNumber;
} 

let item2 =largestElememt([34, 43, 23, 5, 12, 56]);
console.log(item2);

