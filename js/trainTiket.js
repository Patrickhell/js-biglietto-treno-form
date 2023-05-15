const inputDistance = document.getElementById ("travelDistance");
const inputAge = document.getElementById ("userAge");
const button = document.querySelector (".button");
const costByKm = 0.233; 
const travelCostBase= inputDistance.value * costByKm ;
let result;




if( inputAge.value < 18) {
    result = travelCostBase - (0.194 * travelCostBase );
} else if( inputAge.value > 65) {
   result = travelCostBase - (0.377 * travelCostBase);
} else {
    result = travelCostBase;
}

console.log(result. toFixed(2));


button.addEventListener ('click' , function()  {
    const outputElement = document.querySelector("pre");
    outputElement.innerHTML += travelCostBase  ;
    
    

    if( inputAge.value < 18) {
        outputElement.innerHTML = (travelCostBase - (0.194 * travelCostBase )).toFixed(2);
        outputElement.classList.add ("green");
    } else if( inputAge.value > 65) {
       outputElement.innerHTML = (travelCostBase - (0.377 * travelCostBase)) .toFixed(2) ;
       outputElement.classList.add ("cyan");
    }  else {outputElement.innerHTML = travelCostBase .toFixed(2);
        outputElement.classList.add ("orange");
    }
    }

    );






