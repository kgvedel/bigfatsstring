//Mathilde and Katrine have been doing this assignment together and dying together #romeo&julietstyle


let stringing = document.getElementById('name').value;
let result;
let dropdown = document.getElementById('dropdown').value;
let one = document.querySelector(".hej");
one = stringing.toUpperCase();


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
    dropdown = document.getElementById('dropdown').value;
   
result = dropdown;
console.log(result);
}


   



