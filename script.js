//Mathilde and Katrine have been doing this assignment together and dying together #romeo&julietstyle


const stringing = document.querySelector(".input").value;
const result;
const dd1 = document.querySelector("dropdown");
const output = document.querySelector(".output");
const btn = document.querySelector("button");



startForm();

function startForm(){
    stringing.value = "";
    output.value = "";
    btn.addEventListener("click", clickButton);

}

function clickButton(){
  let name;
let selectValue = dd1.value;
switch(selectValue){
    case "0":
        name  = stringing.value.toLowerCase();
        output.value = `${name[0].toUpperCase()}${name.substring(1)}`;
        break;
        case "1":
			name = input.value.substring(0, input.value.indexOf(" "));
			output.value = name;
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

//output.textContent = selectedValue;

}


   



