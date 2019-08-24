function Game(selector, maxX, maxY) {
    var stage = document.querySelector(selector);
    this.dot = 10;
    this.maxX = maxX;
    this.maxY = maxY;
    this.start = function() {

    }
    this.addToStage = function(el) {
    	stage.appendChild(el);
    }
}
