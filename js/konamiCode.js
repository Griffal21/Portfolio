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
      console.log("Well that was dissapointing :(");
      console.log("Put in the code again or click the gif to remove it");
      position = 0;
    }
  } else {
    position = 0;
  }
});//addeventlistener
