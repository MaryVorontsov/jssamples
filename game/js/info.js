function Info(coins, level, skills) {
    var me = this;
    this.coins = coins || 0;
    this.level = level || 0;
    this.skills = skills || [];


    var coinsEl = document.querySelector("#info .coins");
    var levelEl = document.querySelector("#info .level");
    var skillsEl = document.querySelector("#info .skills");

    this.draw = function() {
        coinsEl.innerHTML = me.coins;
        levelEl.innerHTML = me.level;
    }
}