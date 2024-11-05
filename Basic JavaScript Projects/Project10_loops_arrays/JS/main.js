
//Utilizing while loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//Utilizing for loop
var Instruments = ["Guitar", "Drums", "Piano", "Base", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments. length; Y++) {
    content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= content;
}
//Utilizing array
function Movie_Function() {
    var Movie_Title= [];
    Movie_Title[0] = "Sonic the Hedgehog";
    Movie_Title[1] = "Moana";
    Movie_Title[2] = "Red One";
    Movie_Title[3] = "Kraven the Hunter";
    document.getElementById("Movie").innerHTML="One of the movie titles in 2024 is"+ "</br>" + Movie_Title[3] + ".";
}
//const assignment
function constant_function() {
    const Country = {name: "United State", capital:"Washington DC", year:2024};
    Country. year= 2000;
    Country.president="Bill Clinton";
    document.getElementById("constant").innerHTML= "The president of " +Country.name +" in year 2000 is " + Country.president +".";
}

//Let keyword assignment
var z = 59;
document.write(z);
{
    let z = 45;
    document.write("<br>" + z);
}
document.write("<br>" + z);


