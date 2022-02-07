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

console.log(stringing);
document.removeEventListener("click", clickButton);

changeValue();
}

function changeValue(){
    dropdown.firstNamefind = stringing.toLowerCase();
    upperAndlower = stringing.toUpperCase();
result = dropdown;
console.log(result);
}


   



