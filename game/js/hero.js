function Hero(game, elClass, x, y) {
    var el = document.createElement('div');
    el.setAttribute('class', elClass);
    game.addToStage(el);
    this.draw = function() {
        el.style.left = x * game.dot + 'px';
        el.style.top = y * game.dot + 'px';
    }
    this.up = function() {
        y -= 1;
    }
    this.down = function() {
    	y+=1;
    }
}