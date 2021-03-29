$(document).ready(function () {
  const creamFlavors = ['Chocolate', 'Vanilla', 'Mango', 'Lizard', 'Pecan'];


  creamFlavors.forEach(function (flavor) {
    $("ul#iceCream").append("I love " + flavor + "!")



    $("ul").append('<li>' + creamFlavors[0] + '</li>');
    $("ul").append('<li>' + creamFlavors[1] + '</li>');
    $("ul").append('<li>' + creamFlavors[2] + '</li>');
    $("ul").append('<li>' + creamFlavors[3] + '</li>');
    $("ul").append('<li>' + creamFlavors[4] + '</li>');
  });


});


/*const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function (thing) {
  $("#likable-things").append(" " + thing + "!")*/
});