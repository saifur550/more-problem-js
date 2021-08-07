let fruits = ["Apple", "Orange", "Plum","Apple", "Orange", "Plum","Apple", "Orange", "Plum"];

//removeDuplicate
function removeDuplicate (fruits){
    //new array 
    let unique = [];


    // //for loop
    // for (let i = 0; i <fruits.length; i ++ ){
    //     const element = fruits[i];
    //     console.log(element);
    // }

    //shorthand for loop
    for (const element of fruits){
        // console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element)
        }
    }
    return unique;




}

const uniqueNames =removeDuplicate(fruits);
console.log(uniqueNames);