var game = new Game('#stage', 96, 48);
var hero = new Hero(game, 'hero', 10, 10);
game.start();
hero.draw();
document.onkeydown = function(e) {
console.log(e);
if (e.code == 'ArrowUp') {
	hero.up();
} else if (e.code == 'ArrowDown') {
	hero.down();
}

}
setInterval(function(){
hero.draw();
}, 50)