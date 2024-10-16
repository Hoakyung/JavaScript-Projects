//using a Global Variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//using a Local Variable
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>")
}

function Add_numbers_2() {
    var X = 10;
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// using console.log()method to help debuging the code for local variable.
function Add_numbers_1() {
    var X = 10;
    console.log (15 + X);
}
function Add_numbers_2(){
    console.log (X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Utilizing Get Date Methods
function get_Date() {
    if (new Date().getHours() < 15) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    if (new Date().getHours() > 15) {
    document.getElementById("Greeting").innerHTML = "Good Evening!";
    }
}
//Utilizing If Statement
var Z = 12
function my_Function() {
    if (Z >10) {
    document.getElementById("Number").innerHTML ="The number is greater than 10."
    }
}

//Utilizing Else Statement

function score_Function() {
    score = document.getElementById("score").value;
    if (score > 80) {
        Greeting = "Well done!";
    }
    else {
        Greeting = "Nice try!";
    }
    document.getElementById("What_is_your_score?").innerHTML= Greeting;
}

//Utilizing Else If Statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >=12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}
