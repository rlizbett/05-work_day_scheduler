//Jumbotron with date from momentjs
document.getElementById('currentDay').textContent = moment().format("MMM Do YY");
//variables
var nineAM = document.getElementById("9am");
var tenAM = document.getElementById("10am");
var elevenAM = document.getElementById("11am");
var twelvePM = document.getElementById("12pm");
var onePM = document.getElementById("1pm");
var twoPM = document.getElementById("2pm");
var threePM = document.getElementById("3pm");
var fourPM = document.getElementById("4pm");
var fivePM = document.getElementById("5pm");

//9am time block
document.getElementById("9am").value = localStorage.getItem("9amText")
document.getElementById("saveBtn9").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("9amText", document.getElementById("9am").value)
    console.log("row9")
})
//10am time block
document.getElementById("10am").value = localStorage.getItem("10amText")
document.getElementById("saveBtn10").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("10amText", document.getElementById("10am").value)
    console.log("row10")
})
//11am time block
document.getElementById("11am").value = localStorage.getItem("11amText")
document.getElementById("saveBtn11").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("11amText", document.getElementById("11am").value)
    console.log("row11")
})
//12pm time block
document.getElementById("12pm").value = localStorage.getItem("12pmText")
document.getElementById("saveBtn12").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("12pmText", document.getElementById("12pm").value)
    console.log("row12")
})
//1pm time block 
document.getElementById("1pm").value = localStorage.getItem("1pmText")
document.getElementById("saveBtn1").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("1pmText", document.getElementById("1pm").value)
    console.log("row1")
})
//2pm time block 
document.getElementById("2pm").value = localStorage.getItem("2pmText")
document.getElementById("saveBtn2").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("2pmText", document.getElementById("2pm").value)
    console.log("row2")
})
//3pm time block 
document.getElementById("3pm").value = localStorage.getItem("3pmText")
document.getElementById("saveBtn3").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("3pmText", document.getElementById("3pm").value)
    console.log("row3")
})
//4pm time block
document.getElementById("4pm").value = localStorage.getItem("4pmText")
document.getElementById("saveBtn4").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("12pmText", document.getElementById("4pm").value)
    console.log("row4")
})
//5pm time block 
document.getElementById("5pm").value = localStorage.getItem("5pmText")
document.getElementById("saveBtn5").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("5pmText", document.getElementById("5pm").value)
    console.log("row5")
})

