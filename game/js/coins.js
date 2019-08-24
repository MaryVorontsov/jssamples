function Coin(game, elClass, x, y) {
    var el = document.createElement('div');
    el.setAttribute('class', elClass);
    game.addToStage(el);
    this.draw = function() {
        el.style.left = x * game.dot + 'px';
        el.style.top = y * game.dot + 'px';
    }
    this.draw();
}
function createRandomCoin(game, elClass) {
var x = Math.floor(Math.random()*game.maxX);
var y = Math.floor(Math.random()*game.maxY);
return new Coin(game, elClass, x, y);

}