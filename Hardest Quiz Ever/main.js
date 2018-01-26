function check() {
	// body...
	var ans1 = document.quiz.question1.value;
	var ans2 = document.quiz.question2.value;
	var ans3 = document.quiz.question3.value;

	var count = 0;
	if(ans1 == "Neptune") {
		count++;
	}

	if(ans2 == "None of the above") {
		count++;
	}

	if(ans3 == "Kohima") {
		count++;
	}

	var messages = ["You need to work hard!", "That's just OK!", "Great Job!"];
	var pictures = ["img/loser.gif", "img/meh.gif", "img/yes.gif"];
	
	var range;
	if (count < 1) {
		range = 0;
	}
	else if (count > 0 && count < 3) {
		range = 1;
	}
	else if(count > 2) {
		range = 2;
	}


	document.getElementById('hiddenText').style.visibility = 'visible';
	document.getElementById('message').innerHTML = messages[range];
	document.getElementById('ending').innerHTML = "You scored: " + count + " marks";
	document.getElementById('picture').src = pictures[range];
	
	
}