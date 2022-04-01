let input = "it's not entirely clear! It's... Well it's a non-trivial problem!"

let vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []



for(let i=0; i<input.length; i++){
  // console.log(`i is ${i}`);
  if(input[i] === 'e'){
      resultArray.push(input[i])
      // console.log(resultArray)
    }

  if(input[i] === 'u'){
      resultArray.push(input[i])
      // console.log(resultArray)
    }

  for(let j=0; j<vowels.length; j++){
    // console.log(`j is ${j}`);
    if(input[i] === vowels[j]){
      // console.log(input[i])
      resultArray.push(input[i]);
      // console.log(resultArray)
    }
  }
}

// console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);