$(document).ready(function() {
  $("#hiddenDiv").hide();
  console.log("You've opened the console!  I like you already!");
  console.log("Feel free to look around my code...");
  console.log("Maybe there are hidden elements waiting to be found!");

  $("#hiddenDiv").on("click", function (e) {
    e.preventDefault();
    $("#hiddenDiv").hide();

    


  });
});//document.ready



var Keys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var position = 0;

document.addEventListener('keydown', function(e) {
  var key = Keys[e.keyCode];
  var requiredKey = konamiCode[position];

  if (key == requiredKey) {

    position++;

    if (position == konamiCode.length) {
      $("#hiddenDiv").toggle();
      $("#hiddenDiv").html('<h1 class="h1Kon">You Found My Secret!</h1><img src="./images/konamiCode.gif" /><br><small class="h1Kon">Click the gif or enter the code again to close</small>');
      console.log("You found my Secret!  Congradulations!");
      position = 0;
    }
  } else {
    position = 0;
  }
});//addeventlistener
