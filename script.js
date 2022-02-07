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
console.log(stringing);
stringing = document.getElementById('name').value;
dropdown.value
document.removeEventListener("click", clickButton);

changeValue();
}

function changeValue(){

    switch (stringing){
        case 0:
           result = stringing.charAt(0).toUpperCase() + stringing.substring(1).toLowerCase();
            break;
        case 1:
            result =stringing.indexOf(" ");
            
    }
//let upperAndLower = stringing.charAt(0).toUpperCase() + stringing.substring(1).toLowerCase(); 
//let findLength = stringing.indexOf(" ");
//let firstNamefind = stringing.slice(0,findLength);

//console.log(upperAndLower);
//console.log(findLength);
//console.log(firstNamefind);

  //  dropdown.firstNamefind = stringing.toLowerCase();
  //  upperAndlower = stringing.toUpperCase();
  //  dropdown = document.getElementById('dropdown').value;

console.log(result);

output.textContent = result;

}


   



