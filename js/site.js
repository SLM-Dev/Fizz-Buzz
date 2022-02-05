
// get values from the user. We need to get the fizz value and the buzz value
function getValues (){


// get the user values from the page
let fizzValue = document.getElementById("fizzValue").value;
let buzzValue = document.getElementById("buzzValue").value;

//parase for numbers
fizzValue = parseInt(fizzValue);
buzzValue = parseInt(buzzValue);


// check that the numbers are intergers
if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
    
//call fizzBuzz
let fbArray = fizzBuzz(fizzValue, buzzValue);

//call displayData and write the values to the screen
displayData(fbArray);

} else {
alert("You  must enter a interger");
    }
}

// do fizz buzz
function fizzBuzz(fizzValue, buzzValue) 
{

let returnArray = [];


    //loop from 1 to 100
    for (let index = 1; index <= 100; index++) {
    //check if the index is divisible by fizzValue and buzzValue

    // check to see if the divisible by both (3 and 5)
    // check to see if divisbile by fizz value (3)
    // check to see if divisbile by buzz value (5)
    if (index % fizzValue == 0 && index % buzzValue == 0) {
        returnArray.push('FizzBuzz');
    } else if (index % fizzValue == 0) {
        returnArray.push('Fizz');
    } else if (index % buzzValue == 0) {
        returnArray.push('Buzz');
    } else {
        returnArray.push(index);
    }
}

    return returnArray;



}

//loop over the array and create a tablerow for each item.
function displayData(fbArray){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML ="";
    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);
    
       //grab use the to put into array
         let rowCols = tableRow.querySelectorAll("td");
            
            rowCols[0].classList.add(fbArray[index]);
            rowCols[0].textContent = fbArray[index]; 
            
            rowCols[1].classList.add(fbArray[index + 1])        
            rowCols[1].textContent = fbArray[index + 1];

            rowCols[2].classList.add(fbArray [index + 2]);
            rowCols[2].textContent = fbArray[index + 2];

            rowCols[3].classList.add(fbArray [index + 3]);
            rowCols[3].textContent = fbArray[index + 3];

            rowCols[4].classList.add(fbArray [index + 4]);
            rowCols[4].textContent = fbArray[index + 4];
            
            tableBody.appendChild(tableRow);
            
        }

}