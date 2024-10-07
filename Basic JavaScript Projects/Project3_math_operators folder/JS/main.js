function addition_Function() { // Utilizing addition function
    var addition = 10 + 12;
    document.getElementById("Math").innerHTML = "10 + 12 =" + addition ;

}

function subtraction_Function() {//utilizing subtraction function
    var subtraction = 12 - 2;
    document.getElementById("Math").innerHTML = "12 - 2 =" + subtraction ;
}

function division_Function() {//utilizing division function
    var division = 12 / 2;
    document.getElementById("Math").innerHTML = "12 / 2 =" + division ;
}

function multiplication_Function() {//utilizing multiplication function
    var multiplication = 12 * 2;
    document.getElementById("Math").innerHTML = "12 * 2 =" + multiplication ;
}

function more_Math() { //utilizing combinde math function
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() {// utilizing modulus operator
    var simple_Math =25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you hav a remainder of " + simple_Math;
} 

function negation_Operator() {// utilizing negation operator
    var x= 6;
    document.getElementById("Math").innerHTML = -x ;
}

function increment_Operator() {// utilizing increment Operator
    var x= 6;
    x++;
    document.getElementById("Math").innerHTML = x++ ;
}

function decrement_Operator() {// utilizing decrement operator
    var x= 6;
    x--;
    document.getElementById("Math").innerHTML = x-- ;
}

function math_Random() { // utilizing math random
    document.getElementById("Math").innerHTML = Math.random()*100;
}   
