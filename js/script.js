function check (){
	var meat = document.getElementById('meat');
	var fish = document.getElementById('fish');
	var chicken = document.getElementById('chicken');
	var check = document.getElementById('check');
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
	var button = document.getElementById('button');
	var title = document.getElementById('title');
	var subtitle = document.getElementById('subtitle');
	var menu = document.getElementById('menu');
	

	button.innerHTML = '18$ - ORDER'
	title.innerHTML = 'CHICKEN WITH POTATOES'
	subtitle.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
	menu.style.backgroundImage = "url(image/foodchi.png)"
}