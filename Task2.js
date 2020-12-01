let inputNumber = process.argv.slice(2)[0];


const reverseNumber = (number) =>{
  number = number+'';
  const reverseNumber = number.split("").reverse().join("");
  return reverseNumber;
}

const isPalindrome = (number) => {
  if (number === reverseNumber(number)){
    return true;
  } else {
    return false;
  }
}
 
const getChild = (number) =>{
  const childArray = [];
  const numberArray = number.split("");

  for(let i=0; i<numberArray.length; i+=2){
    const number1 = parseInt(numberArray[i]); 
    const number2 = parseInt(numberArray[i+1]) || 0;
    const newValue = number1+number2;
    childArray.push(newValue)
  }
  return childArray.join('');
}

const palindromeDescendant = (number) =>{
  const isPalindromeNumber = isPalindrome(number);
  if (isPalindromeNumber) {
    return console.log(true);
  }
  if (!isPalindromeNumber && number.length < 3){
    return console.log(false);
  } else {
    const childNumber = getChild(number);
    palindromeDescendant(childNumber);
  }

}

palindromeDescendant(inputNumber);