const button = document.getElementById("one");
const imageone = document.querySelectorAll('img')[0];
const imagetwo = document.querySelectorAll('img')[1];
const imageURL = 'assets/dice0.png';
imageone.setAttribute('src', imageURL);
imagetwo.setAttribute('src', imageURL);




function randomCall(){



	const randomNumberone = Math.floor(Math.random() * 6) + 1;
	const image1 = 'dice' + randomNumberone + '.png';
	const imageoneURL = `assets/${image1}`;
	imageone.setAttribute('src', imageoneURL);



	const randomNumbertwo = Math.floor(Math.random() * 6) + 1;
	const image2 = `dice${randomNumbertwo}.png`;
	const imagetwoURL = `assets/${image2}`;
	imagetwo.setAttribute('src', imagetwoURL);




	if(randomNumberone > randomNumbertwo){
		document.querySelector('h1').innerHTML = 'Player one win '
	}else if(randomNumberone < randomNumbertwo){
		document.querySelector('h1').innerHTML = 'Player two win '
	}else{
		document.querySelector('h1').innerHTML = 'DRAW!!! '
	}



}




button.addEventListener("click", randomCall);



