function Vote_Function() {//utilizing ternary operator
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18)? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML= Can_vote + "&nbsp to vote.";
}

//utilizing constructor function that uses the “new” and “this” keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}
var Jack = new Vehicle ("Doge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("New_and_This").innerHTML = "Erik drives a &nbsp" + Erik.Vehicle_Color + "-colored &nbsp" + Erik.Vehicle_Model + "&nbsp manufactured in &nbsp" + Erik.Vehicle_Year + "."; 
}
//utilizing nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;

    }

}