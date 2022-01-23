document.getElementById('currentDay').textContent = moment().format("MMM Do YY");
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
    console.log("saveTime9")
})
//10am time block
document.getElementById("10am").value = localStorage.getItem("10amText")
document.getElementById("saveBtn10").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("10amText", document.getElementById("10am").value)
    console.log("saveTime10")
})
//11am time block
document.getElementById("11am").value = localStorage.getItem("11amText")
document.getElementById("saveBtn11").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("11amText", document.getElementById("11am").value)
    console.log("saveTime11")
})
//12pm time block
document.getElementById("12pm").value = localStorage.getItem("12pmText")
document.getElementById("saveBtn12").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("12pmText", document.getElementById("12pm").value)
    console.log("saveTime12")
})

