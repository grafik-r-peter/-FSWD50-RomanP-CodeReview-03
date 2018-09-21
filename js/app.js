

function calcInsurance(age, hp, name, country) {
	
	age = document.getElementById("getAge").value;
	hp = document.getElementById("getHP").value;
	name = document.getElementById("getName").value;
	country = document.getElementById("getCountry").value;

	if (age =="" || hp == "" || name =="") {
		alert("Sorry, we need you to give us some info about you.");
	
	} else {

		var cost = function() {    // calculating cost for each country
				var baseCost = (hp * 100 / age);	// cost before country selection  				

				if (country = "austria") {
					document.getElementById("output-calc").innerHTML = baseCost + 50;
				}  
				else if (country == "hungary") {
					document.getElementById("output-calc").innerHTML = baseCost + 100;
				}  
				else if (country = "greece") {
					document.getElementById("output-calc").innerHTML = baseCost + 150;
				}  
				else if (country = "other") { 
					document.getElementById("output-calc").innerHTML = "<span class='sorryCant'> Sorry, " + name + " we can only give custom quotes for Austria, Hungary and Greece. </span>";
				} 
				else {
					document.getElementById("output-calc").innerHTML = "<span class='calcError'> Sorry, something went wrong. </span>";
				}	
			}
		cost()
	}
}

document.getElementById("submit").addEventListener("click", calcInsurance);


