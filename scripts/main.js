/*Established values for the Passwords */

const charMaxLength = 128; // Max Number of Characters Allowed
const charMinLength = 8; // Min Number of Characters allowed
let numbers = '0123456789';
let charUpCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charLowCases='abcdefghijklmnopqrstuvwxyz';
let charCaseRandom = '!@#$%^&,[];<>/?'

let charLimit = document.getElementById("charLimit");


function passGen(){

    let finalPass ='';

    let digits = document.getElementById("randNum")
    let upper = document.getElementById("randUpCase")
    let lower = document.getElementById("randLowCase")
    let cases = document.getElementById("randCases")

    if(charLimit.value > charMaxLength)
    alert("Password exceeds the character count of 128")
        else if (charLimit.value < charMinLength)
    alert("Please enter a password set value of at least 8")
    else{
        let charLength = charLimit.value
        console.log(charLength) 
    }

    if (digits.checked && upper.checked && lower.checked && cases.checked && charLimit.value < charMaxLength && charLimit.value> charMinLength){

    allCombined = numbers + charUpCases + charLowCases + charCaseRandom
    while(finalPass.length < charLimit.value ){
        finalPass += allCombined[Math.floor(Math.random() * allCombined.length)]
    }
    document.getElementById("printedPass").innerHTML = finalPass


} else if(upper.checked && lower.checked && cases.checked && charLimit.value < charMaxLength && charLimit.value > charMinLength){
    
    tallCombined = charUpCases + charLowCases + charCaseRandom
    while(finalPass.length < charLimit.value ){
        finalPass += tallCombined[Math.floor(Math.random() * tallCombined.length)]
    }
    document.getElementById("printedPass").innerHTML = finalPass
} else if (lower.checked && cases.checked && charLimit.value < charMaxLength && charLimit.value > charMinLength){

    lowCombined = charLowCases + charCaseRandom
    while(finalPass.length < charLimit.value ){
        finalPass += lowCombined[Math.floor(Math.random() * lowCombined.length)]
    } 
    document.getElementById("printedPass").innerHTML = finalPass
} else if (cases.checked && charLimit.value < charMaxLength && charLimit.value > charMinLength){
    
    oneCombine = charCaseRandom
    while(finalPass.length < charLimit.value ){
        finalPass += oneCombine[Math.floor(Math.random() * oneCombine.length)]
}
    document.getElementById("printedPass").innerHTML = finalPass

} else if(digits.checked && upper.checked && lower.checked && charLimit.value < charMaxLength && charLimit.value> charMinLength){

    numSubComboOne = numbers + charUpCases + charLowCases 
    while(finalPass.length < charLimit.value ){
        finalPass += numSubComboOne[Math.floor(Math.random() * numSubComboOne.length)]
}
    document.getElementById("printedPass").innerHTML = finalPass
}
}

//Copy Clipboard Function from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyFunction() {
    // Get the text field
    let copyText = document.getElementById("printedPass");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}



