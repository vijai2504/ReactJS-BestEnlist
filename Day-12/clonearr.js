function arrayClone (newArray){
    return newArray.slice(); 
}

newArray = [1, 2, 3, 4, 5];

console.log("newArray -- ", newArray);
console.log("clonedArray -- ", arrayClone(newArray));