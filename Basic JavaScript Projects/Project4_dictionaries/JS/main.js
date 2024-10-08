function my_Dictionary() {//utilizing dictionary
    var Car = {
        brand: "Honda",
        model: "Civic",
        color: "Red",
        sound: "Vroom"
    } ;
    document.getElementById("Dictionary").innerHTML = Car.color;
}

function my_Dictionary() {//utilizing dele statment in dictionary
    var Car = {
        brand: "Honda",
        model: "Civic",
        color: "Red",
        sound: "Vroom"
    };
    delete Car.color;
    document.getElementById("Dictionary").innerHTML = Car.color;
}