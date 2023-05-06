function calculate() {
    let sqft = document.getElementById("sqft").value;
    let price = sqft * 0.42;
    document.getElementById("result").innerHTML = "The total price for " + sqft + " square feet is $" + price.toFixed(2);
  }