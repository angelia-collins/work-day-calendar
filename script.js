// var tenAM = document.querySelector("#areaTen");

var input = document.querySelector("textarea");
var hourlyInput = [];

function displayDate() {
    var current = moment().format("dddd, MMMM Do");
    $("#currentDay").text(current);
}

displayDate();

function storeInput() {
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("hourlyInput", JSON.stringify(hourlyInput));
  }

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    storeInput();
}
    
   );


// $("#btnTen").on("click", function(event) {
//     event.preventDefault();
//     storeInput();
// }
    
//    );
