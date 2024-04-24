const inputArray = [1, 2, 3, - 4, 5, 6]

let newArray = [];
  // Code here
for (let i = 0; i < inputArray.length; i++ ){
  if (inputArray[i] < 0){
    break
  }
  newArray[i] = inputArray[i]
}

console.log(newArray)








