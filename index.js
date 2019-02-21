const button = document.getElementById("one");
const buttontwo = document.getElementById("two");
const imageone = document.querySelectorAll('img')[0];
const imagetwo = document.querySelectorAll('img')[1];
const imageURL = 'assets/dice0.png';
imageone.setAttribute('src', imageURL);
imagetwo.setAttribute('src', imageURL);
var randomNumberone;
var randomNumbertwo;

button.addEventListener("click", randomCall);
buttontwo.addEventListener("click", randomCall);

function randomCall(){


	randomNumberone = Math.floor(Math.random() * 6) + 1;
	document.querySelectorAll('h3')[0].innerHTML = randomNumberone;
	const image1 = 'dice' + randomNumberone + '.png';
	const imageoneURL = `assets/${image1}`;
	imageone.setAttribute('src', imageoneURL);



	randomNumbertwo = Math.floor(Math.random() * 6) + 1;
	const image2 = `dice${randomNumbertwo}.png`;
	const imagetwoURL = `assets/${image2}`;
	imagetwo.setAttribute('src', imagetwoURL);




	if(randomNumberone > randomNumbertwo){
		document.querySelector('h1').innerHTML = '🥰 Player one win '
		document.querySelectorAll('h3')[0].innerHTML = randomNumberone;
		document.querySelectorAll('h3')[1].innerHTML = " > "
		document.querySelectorAll('h3')[2].innerHTML = randomNumbertwo;

	}else if(randomNumbertwo >randomNumberone){
		document.querySelector('h1').innerHTML = 'Player two win 🥰'
		document.querySelectorAll('h3')[0].innerHTML = randomNumberone;
		document.querySelectorAll('h3')[1].innerHTML = " < "
		document.querySelectorAll('h3')[2].innerHTML = randomNumbertwo;
	}
	else if(randomNumbertwo === randomNumberone){
		document.querySelector('h1').innerHTML = '🥰 DRAW!!! 🥰 '
		document.querySelectorAll('h3')[0].innerHTML = randomNumberone;
		document.querySelectorAll('h3')[1].innerHTML = " = "
		document.querySelectorAll('h3')[2].innerHTML = randomNumbertwo;
	}else{
		document.querySelector('h1').innerHTML = '🥰'
	}



}








