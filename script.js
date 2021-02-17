const baseURL= "https://cat-fact.herokuapp.com";
const card = document.querySelector('.card');
const catList = document.querySelectorAll('.card-body');// for the space for info in HTML
//const button= document.querySelector(".button");// main button



 fetch(`${baseURL}/facts/random`)//fetches data from the API and adding endpoints
 .then(function(results){//use then statement to start promise. add function with parameters
     return results.json() // next you need to use a return statement to json your results
 })
.then(function(json){//the next promise is to take the json info and display the facts
    displayFacts(json)
    console.log(json)//console log the json so that you can see the array(s)
})

 function displayFacts(catObject){
     console.log(catObject)
let text = document.getElementsByClassName("card-text")[0];
text.innerText=catObject.text;//attaching the array text to the HTML
}

// //function timedRefresh(time){
//     setTimeout(() =>{
//         location.reload();
//     }, time)




// button.addEventListener("click",results )// create an event to listen for the click of the button
//  function fetchResults(event){//fetch the results of the event
//   console.log(event)
//     event.preventDefault();//prevents auto reload  
// // }
// function clickFunction(){
//     location.reload(forcedReload,true);
// }