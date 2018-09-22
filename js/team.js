// PRINTING TEAM MEMBERS

var team = JSON.parse(teamMembers);

var i = 0;
   	for (i = 0; i < teamMembers.length; i++) {
	document.getElementById("team-container").innerHTML += 
								"<div class='col-1_2-flex'> <div class='team-img'><img class='team-pic' src='" + team[i].image + "' alt='" + team[i].tName + "'></div>" + 
								"<div><p>" + team[i].tName + "<br>" + team[i].email + "</p></div></div>";
   	   }  