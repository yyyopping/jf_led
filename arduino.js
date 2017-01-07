var five = require("johnny-five");
var board, button, led;

board = new five.Board();

board.on("ready", function() {
  button = new five.Button(7);
  led = new five.Led(13);

  board.repl.inject({
    button: button
  });

  button.on("down", function() {
    console.log("button is pressed");
    //(new five.Led(13)).strobe();
    led.on();
  });

  button.on("up", function() {
    console.log("button is released");
    led.off();
  });
});
