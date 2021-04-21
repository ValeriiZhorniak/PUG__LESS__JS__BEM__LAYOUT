function check (){
	let meat = document.getElementById('meat');
	let fish = document.getElementById('fish');
	let chicken = document.getElementById('chicken');
	let check = document.getElementById('check');
	if(check.checked){
		meat.style.display = 'none';
		fish.style.display = 'none';
		chicken.style.display = 'none';
	} else {
		meat.style.display = 'flex';
		fish.style.display = 'flex';
		chicken.style.display = 'flex';
	}
}

function offer (){
	let button = document.getElementById('button');
	let title = document.getElementById('title');
	let subtitle = document.getElementById('subtitle');
	let menu = document.getElementById('menu');
	

	button.innerHTML = '18$ - ORDER'
	title.innerHTML = 'CHICKEN WITH POTATOES'
	subtitle.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
	menu.style.backgroundImage = "url(image/foodchi.png)"
}