class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", e => {
      const currentTarget = e.currentTarget;
      const $currentTarget = $(currentTarget);
      this.makeMove($currentTarget);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("This is an invalid move buddy!");
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $results = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $results.html(`You win, ${winner}!`);
      } else {
        $results.html("stalemate!");
      }

      this.$el.append($results);
    }

    // this.game.playMove($square.data("pos"));
    // $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    const $ul = $("<ul>");
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let $li = $("<li>");
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
