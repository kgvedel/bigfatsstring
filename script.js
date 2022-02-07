//Mathilde and Katrine have been doing this assignment together and dying together #romeo&julietstyle


let stringing = document.getElementById('name').value;
let result;
let dropdown = document.getElementById('dropdown').value;
let output = document.getElementById('res');



startForm();

function startForm(){
    
document.querySelector("button").addEventListener("click", clickButton);

}

function clickButton(){

stringing = document.getElementById('name').value;
dropdown.value

console.log(stringing);
document.removeEventListener("click", clickButton);

changeValue();
}

function changeValue(){

let upperAndLower = stringing.charAt(0).toUpperCase() + stringing.substring(1).toLowerCase(); 
let findLength = stringing.indexOf(" ");
let firstNamefind = stringing.slice(0,findLength);



    dropdown.firstNamefind = stringing.toLowerCase();
    upperAndlower = stringing.toUpperCase();
    dropdown = document.getElementById('dropdown').value;
   

result=upperAndLower;
console.log(result);

output.textContent = result;

}


   



