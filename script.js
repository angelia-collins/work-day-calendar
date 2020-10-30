function displayDate() {
    var current = moment().format("dddd, MMMM Do");
    $("#currentDay").text(current);
}

displayDate();

// row 9 AM
function storeInputNineAM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaNine");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("NineHourlyInput", JSON.stringify(hourlyInput));
}

function renderNineAM() {
    var savedInput = JSON.parse(localStorage.getItem("NineHourlyInput"));
    $("#areaNine").text(savedInput);
}
renderNineAM();

function changeColorsNineAM() {
    var hour = moment().hour();
    console.log(hour);
    if (hour > 9) {
        $("#areaNine").removeClass("future");
        $("#areaNine").addClass("past");
    }
    if (hour === 9) {
        $("#areaNine").removeClass("future");
        $("#areaNine").addClass("present");
    }
}
changeColorsNineAM();

$("#btnNine").on("click", function (event) {
    event.preventDefault();
    storeInputNineAM();
}
);

// row 10 AM
function storeInputTenAM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaTen");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("TenHourlyInput", JSON.stringify(hourlyInput));
}

function renderTenAM() {
    var savedInput = JSON.parse(localStorage.getItem("TenHourlyInput"));
    $("#areaTen").text(savedInput);
}
renderTenAM();

function changeColorsTenAM() {
    var hour = moment().hour();
    console.log(hour);
    if (hour > 10) {
        $("#areaTen").removeClass("future");
        $("#areaTen").addClass("past");
    }
    if (hour === 10) {
        $("#areaTen").removeClass("future");
        $("#areaTen").addClass("present");
    }
}
changeColorsTenAM();

$("#btnTen").on("click", function (event) {
    event.preventDefault();
    storeInputTenAM();
}
);

// row 11 AM
function storeInputElevenAM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaEleven");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("ElevenHourlyInput", JSON.stringify(hourlyInput));
}

function renderElevenAM() {
    var savedInput = JSON.parse(localStorage.getItem("ElevenHourlyInput"));
    $("#areaEleven").text(savedInput);
}
renderElevenAM();

function changeColorsElevenAM() {
    var hour = moment().hour();
    console.log(hour);
    if (hour > 11) {
        $("#areaEleven").removeClass("future");
        $("#areaEleven").addClass("past");
    }
    if (hour === 11) {
        $("#areaEleven").removeClass("future");
        $("#areaEleven").addClass("present");
    }
}
changeColorsElevenAM();

$("#btnEleven").on("click", function (event) {
    event.preventDefault();
    storeInputElevenAM();
}
);

// row 12 PM
function storeInputTwelvePM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaTwelve");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("TwelveHourlyInput", JSON.stringify(hourlyInput));
}

function renderTwelveAM() {
    var savedInput = JSON.parse(localStorage.getItem("TwelveHourlyInput"));
    $("#areaTwelve").text(savedInput);
}
renderTwelveAM();

function changeColorsTwelveAM() {
    var hour = moment().hour();
    console.log(hour);
    if (hour > 12) {
        $("#areaTwelve").removeClass("future");
        $("#areaTwelve").addClass("past");
    }
    if (hour === 12) {
        $("#areaTwelve").removeClass("future");
        $("#areaTwelve").addClass("present");
    }
}
changeColorsTwelveAM();

$("#btnTwelve").on("click", function (event) {
    event.preventDefault();
    storeInputTwelvePM();
}
);

// row 1 PM
function storeInputOnePM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaOne");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("OneHourlyInput", JSON.stringify(hourlyInput));
}

function renderOnePM() {
    var savedInput = JSON.parse(localStorage.getItem("OneHourlyInput"));
    $("#areaOne").text(savedInput);
}
renderOnePM();

function changeColorsOnePM() {
    var hour = moment().hour();
    if (hour > 13) {
        $("#areaOne").removeClass("future");
        $("#areaOne").addClass("past");
    }
    if (hour === 13) {
        $("#areaOne").removeClass("future");
        $("#areaOne").addClass("present");
    }
}
changeColorsOnePM();

$("#btnthefirst").on("click", function (event) {
    event.preventDefault();
    storeInputOnePM();
}
);

// row 2 PM
function storeInputTwoPM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaTwo");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("TwoHourlyInput", JSON.stringify(hourlyInput));
}

function renderTwoPM() {
    var savedInput = JSON.parse(localStorage.getItem("TwoHourlyInput"));
    $("#areaTwo").text(savedInput);
}
renderTwoPM();

function changeColorsTwoPM() {
    var hour = moment().hour();
    if (hour > 14) {
        $("#areaTwo").removeClass("future");
        $("#areaTwo").addClass("past");
    }
    if (hour === 14) {
        $("#areaTwo").removeClass("future");
        $("#areaTwo").addClass("present");
    }
}
changeColorsTwoPM();

$("#btnTwo").on("click", function (event) {
    event.preventDefault();
    storeInputTwoPM();
}
);

// row 3 PM
function storeInputThreePM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaThree");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("ThreeHourlyInput", JSON.stringify(hourlyInput));
}

function renderThreePM() {
    var savedInput = JSON.parse(localStorage.getItem("ThreeHourlyInput"));
    $("#areaThree").text(savedInput);
}
renderThreePM();

function changeColorsThreePM() {
    var hour = moment().hour();
    if (hour > 15) {
        $("#areaThree").removeClass("future");
        $("#areaThree").addClass("past");
    }
    if (hour === 15) {
        $("#areaThree").removeClass("future");
        $("#areaThree").addClass("present");
    }
}
changeColorsThreePM();

$("#btnThree").on("click", function (event) {
    event.preventDefault();
    storeInputThreePM();
}
);

// row 4 PM
function storeInputFourPM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaFour");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("FourHourlyInput", JSON.stringify(hourlyInput));
}

function renderFourPM() {
    var savedInput = JSON.parse(localStorage.getItem("FourHourlyInput"));
    $("#areaFour").text(savedInput);
}
renderFourPM();

function changeColorsFourPM() {
    var hour = moment().hour();
    if (hour > 16) {
        $("#areaFour").removeClass("future");
        $("#areaFour").addClass("past");
    }
    if (hour === 16) {
        $("#areaFour").removeClass("future");
        $("#areaFour").addClass("present");
    }
}
changeColorsFourPM();

$("#btnFour").on("click", function (event) {
    event.preventDefault();
    storeInputFourPM();
}
);

// row 5 PM
function storeInputFivePM() {
    var hourlyInput = [];
    var input = document.querySelector("#areaFive");
    var hourlyInputText = input.value.trim();
    hourlyInput.push(hourlyInputText);
    localStorage.setItem("FiveHourlyInput", JSON.stringify(hourlyInput));
}

function renderFivePM() {
    var savedInput = JSON.parse(localStorage.getItem("FiveHourlyInput"));
    $("#areaFive").text(savedInput);
}
renderFivePM();

function changeColorsFivePM() {
    var hour = moment().hour();
    if (hour > 17) {
        $("#areaFive").removeClass("future");
        $("#areaFive").addClass("past");
    }
    if (hour === 17) {
        $("#areaFive").removeClass("future");
        $("#areaFive").addClass("present");
    }
}
changeColorsFivePM();

$("#btnFive").on("click", function (event) {
    event.preventDefault();
    storeInputFivePM();
}
);