//utilizing concatenaate method
function Full_Sentence() {
    var part_1= "I have";
    var part_2= "made this";
    var part_3= "into a complete";
    var part_4= "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//utilizing slice Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;

}
//utilizing string Method
function string_Method() {
    var X = 182
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//utilizing precision Method
function Precision_Method() {
    var X = 12938.30129;
    document.getElementById("Precision").innerHTML= X.toPrecision(9);
}
//utilizing uppercase method
function UpperCase_Method() {
    var text = "Hello World!";
    document.getElementById("UpperCase").innerHTML= text.toUpperCase();
}
//utilizing search method
function Search_Method() {
    var text = "I like blueberry very much!";
    document.getElementById("Search").innerHTML= text.search("blueberry");
}