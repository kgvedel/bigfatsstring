//Mathilde and Katrine have been doing this assignment together and dying together #romeo&julietstyle


let stringing = document.getElementById('name').value;
let result;
let dropdown = document.getElementById('dropdown').value;


startForm();

function startForm(){
    
document.querySelector("button").addEventListener("click", clickButton);

}

function clickButton(){

stringing = document.getElementById('name').value;
dropdown = document.getElementById('dropdown').value;
dropdown[1] = stringing.toUpperCase();

console.log(stringing);
document.removeEventListener("click", clickButton);

changeValue();
}

function changeValue(){

let upperAndLower = stringing.charAt(0).toUpperCase() + stringing.substring(1).toLowerCase(); 
let findLength = stringing.indexOf(" ");
let firstNamefind = stringing.slice(0,findLength);

console.log(upperAndLower);
console.log(findLength);
console.log(firstNamefind);

    dropdown.firstNamefind = stringing.toLowerCase();
    upperAndlower = stringing.toUpperCase();
    dropdown = document.getElementById('dropdown').value;
   
result = dropdown;
console.log(result);
}


   



