var game = new Game('#stage', 96, 48);
var info = new Info(1,[],0);
var hero = new Hero(game, 'hero', 10, 10);
var coinsCollection = [];
for (var i = 0; i < 20; i++) {
	coinsCollection.push(createRandomCoin(game, 'coin'));
}
game.start();
hero.draw();
info.draw();
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
	coinsCollection.forEach(function(coin, index){
		if (intersect(hero, coin, 3)) {
			info.coins +=1;
			coin.destroy();
		}
	})
    hero.draw();
    info.draw();
}, 100)