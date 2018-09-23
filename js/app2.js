
// QUOTE CALCULATOR

function calcInsurance(age, hp, name, country) { 
	age = document.getElementById("getAge").value;
	hp = document.getElementById("getHP").value;
	name = document.getElementById("getName").value;
	country = document.getElementById("getCountry").value;

	if (age =="" || hp == "" || name =="") {
		alert("Sorry, we need you to give us some info about you.");
	
	} else {
	 			var cost = function() {												// calculating cost for each country
					var a = (hp * 100 / age) + 50;
					var b = (hp * 120 / age) + 100;
					var c = (hp * 150 / (age + 3)) + 150;
					if (country == "at") {
					return Math.round(a);
					} else if (country == "hu") {
					return Math.round(b); 
					} else if (country == "gr") {
					return Math.round(c);
					} else {
					return false;
					}
				}
	}
	cost();
	document.getElementById("output-calc").innerHTML = "Hey " + name + ", this is your calculated price: <br><span class='price'> € " + cost() + "</span>";

}

document.getElementById("submit").addEventListener("click", calcInsurance);