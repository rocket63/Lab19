var fruit = [];
var price = [];
var text, i;
var total = 0;

function display() {
  text = "<ul>";
for (i = 0; i < fruit.length; i++) {
    text += "<li>" + fruit[i] + "  " + "$" + price[i].toFixed(2) + "</li>";
    //total = total + parseFloat(price[i].value)
    
}
  text += "</ul>";
  document.getElementById("items").innerHTML = text;
  document.getElementById("total").innerHTML = "Total is: $" + total.toFixed(2);
  
  
  
} //document.write will wipe out formatting

function addCherries() {
  fruit.push("Cherries");
  price.push(1.25);
  total = total + 1.25;
}

function addBananas() {
  fruit.push("Bananas");
  price.push(1.00);
  total = total + 1.00;
}

function addPineapple() {
  fruit.push("Pineapple");
  price.push(1.75);
  total = total + 1.75;
}

function addApple() {
  fruit.push("Apple");
  price.push(1.50);
  total = total + 1.50;
}