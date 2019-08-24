function Hero(game, elClass, x, y) {
    var el = document.createElement('div');
    el.setAttribute('class', elClass);
    game.addToStage(el);
    var step = 3;
    var angle = 0;
    this.draw = function() {
        el.style.left = x * game.dot + 'px';
        el.style.top = y * game.dot + 'px';
        el.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
    this.up = function() {
        y -= step;
        angle = -90;
    }
    this.down = function() {
        y += step;
        angle = 90;
    }
    this.right = function() {
        x += step;
        angle = 0;
    }
    this.left = function() {
        x -= step;
        angle = 180;
    }
}