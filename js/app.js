

function calcInsurance(age, hp, name, country) {
	
	age = document.getElementById("getAge").value;
	hp = document.getElementById("getHP").value;
	name = document.getElementById("getName").value;
	country = document.getElementById("getCountry").value;

	if (age =="" || hp == "" || name =="") {
		alert("Sorry, we need you to give us some info about you.");
	
	} else {
		var cost = function() {    // calculating cost for each country
			//	console.log(country);		
				var a = (hp * 100 / age) + Number(country);
				document.getElementById("output-calc").innerHTML = a;
			}
		cost()
	}
}

document.getElementById("submit").addEventListener("click", calcInsurance);


