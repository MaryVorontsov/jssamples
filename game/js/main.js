var game = new Game('#stage', 96, 48);
var hero = new Hero(game, 'hero', 10, 10);
game.start();
hero.draw();
document.onkeyup = function(e) {
    console.log(e);
    if (e.code == 'ArrowUp') {
        hero.up();
    } else if (e.code == 'ArrowDown') {
        hero.down();
    } else if (e.code == 'ArrowRight') {
        hero.right();
    } else if (e.code == 'ArrowLeft') {
        hero.left();
    }
}
setInterval(function() {
    hero.draw();
}, 500)