const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function invalidText(str) {
  const regex = /[^a-zA-Z\s0-9]/g;
  return str.replace(regex, "");
}

function getInput() {
    if (textInput.value === '') {
        alert('Please input a value');
    } else {
        const cleanInput = invalidText(textInput.value);
        isPalindrome(cleanInput);
    }
}

function isPalindrome(str) {
    const arr = str.toLowerCase().split('');
    const palim = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            palim.push(arr[i]);
        }
    }
    const clean = [...palim];
    const normal = palim.join('');
    const inverted = clean.reverse().join('');
    
    showPalindrome(normal, inverted);
}

function showPalindrome(arr, arr2) {
    if (arr === arr2) {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`;
    } else {
        result.innerHTML = `<strong>${textInput.value}</strong> is NOT a palindrome`;
    }
}

checkButton.addEventListener("click", getInput);