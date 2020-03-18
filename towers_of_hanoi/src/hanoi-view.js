class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let stack = 0; stack < 3; stack++) {
        let $ul = $("<ul>");
        $('.hanoi').append($ul);
      for (let disc = 0; disc < 3; disc++) {
        let $li = $("<li>");
        $li.data("pos", [stack, disc]);
        $ul.append($li);
    }
}
this.$el.append($ul);
}

render() {}
}

module.exports = View;
