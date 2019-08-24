function Hero(game, elClass, x, y) {
    var el = document.createElement('div');
    el.setAttribute('class', elClass);
    game.addToStage(el);
    var step = 3;
    this.draw = function() {
        el.style.left = x * game.dot + 'px';
        el.style.top = y * game.dot + 'px';
    }
    this.up = function() {
        y -= step;
    }
    this.down = function() {
    	y+=step;
    }
    this.right = function(){
    	x += step;
    }
    this.left = function(){
    	x -=step;
    }
}