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