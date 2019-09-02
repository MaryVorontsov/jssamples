function Hero(game, elClass, x, y) {
	var me = this;
	this.x = x;
	this.y = y;
    var el = document.createElement('div');
    el.setAttribute('class', elClass);
    game.addToStage(el);
    var step = 3;
    var angle = 0;
    this.draw = function() {
        el.style.left = me.x * game.dot + 'px';
        el.style.top = me.y * game.dot + 'px';
        el.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
    this.up = function() {
        me.y -= step;
        angle = -90;
    }
    this.down = function() {
        me.y += step;
        angle = 90;
    }
    this.right = function() {
        me.x += step;
        angle = 0;
    }
    this.left = function() {
        me.x -= step;
        angle = 180;
    }
}