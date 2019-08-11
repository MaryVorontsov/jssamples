var button = document.getElementById('left-menu-control');
var menu = document.getElementById('left-menu');
var openFlag = false;
button.onclick = function() {
	openFlag = !openFlag
	menu.classList.toggle('active');
	button.classList.toggle('active');
	if (openFlag) {
		button.innerHTML = 'close';
	} 
	else {

		button.innerHTML = 'open';
	}

} 
