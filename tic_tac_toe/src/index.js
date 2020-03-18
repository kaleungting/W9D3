const View = require("./ttt-view.js");
const Game = require("../../tictactoe_solution/game.js");

$(() => {
    const $container = $('.ttt');
    const game = new Game();
    new View(game, $container);


  });
