document.write(typeof 25)// utilizing typeof operator

document.write("five" + 1)
//utilizing Not a Number
function my_Function1() {
    document.getElementById("Test").innerHTML= (0/0);
}

function my_Function2() {
    document.getElementById("Test").innerHTML= isNaN(5);
}

function my_Function3() {
    document.getElementById("Test").innerHTML= isNaN("Blue");
}

function my_Function4() {//utilizing infinity
    document.getElementById("Test").innerHTML= (2E310);
}

function my_Function5() {//utilizing negative infinity
    document.getElementById("Test").innerHTML= (-3E310);
}
//utilizing Boolean logic
function Boolean_logic() {
    document.getElementById("Test").innerHTML= (10<3);
}
//utilizing console.log
console.log(2+2);
console.log(3>4);
//utilizing ==
function my_Function6() {
    document.getElementById("Test").innerHTML= (1+2 == 4);
}

function my_Function7() {
    document.getElementById("Test").innerHTML= (2+2 == 4);
}
//utilizing ===
function my_Function8() {
    var x= 3+4
        y= 3+4
    document.getElementById("Test").innerHTML= (x === y);
}

function my_Function9() {
    var x= 3-1
        y= 3+1
    document.getElementById("Test").innerHTML= (x === y);
}

function my_Function10() {
    var x= 3-1
        y= "three - one"
    document.getElementById("Test").innerHTML= (x === y);
}
//utilizing AND, OR, Not Boolean logic
function my_Function11() {
    var x= 3<5
        y= 4<6
    document.getElementById("Test").innerHTML= (x && y);
    
}

function my_Function12() {
    var x= 3<5
        y= 4>6
    document.getElementById("Test").innerHTML= (x && y);
}

function my_Function13() {
    var x= 3<5
        y= 4>6
    document.getElementById("Test").innerHTML= (x || y);
}

function my_Function14() {
    var x= 3>5
        y= 4>6
    document.getElementById("Test").innerHTML= (x || y);
}

function not_Function15() {
    
    document.getElementById("Test").innerHTML= !(4>9);
}

function not_Function16() {

    document.getElementById("Test").innerHTML= !(4<9);
}