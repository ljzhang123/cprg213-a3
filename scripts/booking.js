/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let monButton = document.getElementById("monday");
let tueButton = document.getElementById("tuesday");
let wedButton = document.getElementById("wednesday");
let thurButton = document.getElementById("thursday");
let friButton = document.getElementById("friday");
let clearButton = document.getElementById("clear-button");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");

monButton.addEventListener("click", dayClicked);
tueButton.addEventListener("click", dayClicked);
wedButton.addEventListener("click", dayClicked);
thurButton.addEventListener("click", dayClicked);
friButton.addEventListener("click", dayClicked);
clearButton.addEventListener("click", clearDays);
fullButton.addEventListener("click", changeRate);
halfButton.addEventListener("click", changeRate);

let dailyRate = (document.getElementById("full").classList.contains("clicked")) ? 35:20;
let dayCounter = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayClicked() {
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        dayCounter+=1;
        calculate();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    let buttons = Array.from(document.getElementsByClassName("clicked"));
    for (let button of buttons) {
        button.classList.remove("clicked");
    }
    fullButton.classList.add("clicked");

    let costDisplay = document.getElementById("calculated-cost");
    costDisplay.innerHTML = "0";
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRate() {
    if (this.innerHTML == "full" && !this.classList.contains("clicked")) {
        dailyRate = 35;
        this.classList.add("clicked");
        halfButton.classList.remove("clicked");
        calculate();
    }
    else if (this.innerHTML == "half" && !this.classList.contains("clicked")) {
        dailyRate = 20;
        this.classList.add("clicked");
        fullButton.classList.remove("clicked");
        calculate();
    }
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let cost = dayCounter * dailyRate;
    let costDisplay = document.getElementById("calculated-cost");
    costDisplay.innerHTML = cost.toString();
}
