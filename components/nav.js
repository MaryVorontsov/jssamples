var button = document.getElementById('left-menu-control');
var menu = document.getElementById('left-menu');
button.onclick = function() {
	menu.classList.toggle('active');
	button.classList.toggle('active');
} 
