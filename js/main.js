//messages to people opening up the inspector
console.log("%cHello and welcome to my...", "background: rgba(136, 4, 247, 0.87);color:#FFF;padding:5px;border-radius: 5px;line-height: 26px;");


console.log ("     %c_T_|_I_|_C_","background: rgb(246, 48, 208);color:#FFF;padding:2px;border-radius: 5px;line-height: 10px;");
console.log ("     %c_T_|_A_|_C_", "background: rgb(246, 48, 208);color:#FFF;padding:2px;border-radius: 5px;line-height: 10px;");
console.log ("     %c_T_|_O_|_E_", "background: rgb(246, 48, 208);color:#FFF;padding:2px;border-radius: 5px;line-height: 10px;");

//checking to see if there is a winner
const checkClass = function(){
  if (XWins123() || XWins456() || XWins789() || XWins147() || XWins258() || XWins369() || XWins159() || XWins357()) {
  $('.Win').show(500).append("<span class='winmessage'>X Wins</span>");
    Xwins++;
    $('.counterXWins').text(Xwins);
    $("#winnerSound")[0].play();
  }  else if (OWins123() || OWins456() || OWins789() || OWins147() || OWins258() || OWins369() || OWins159() || OWins357()){
  Message = "O Wins!"
  $('.Win').show(500).append("<span class='winmessage'>O Wins</span>");
  Owins++;
  $('.counterOWins').text(Owins);
  $("#winnerSound")[0].play();
} else {
  noWin();
}
};

let Xwins = 0
let Owins = 0
let numClicks = 0;

//reseting the screen back to its default
const reset = function(){
  $('.hidden').removeClass('hidden').addClass('box').text('');
  $('.hiddenO').removeClass('hiddenO').addClass('box').text('');
  numClicks = 0;
  $('.winmessage').remove();
  $('.Player').removeClass('hide');
}

//if there is a draw
let noWin = function(){
  if (numClicks === 9){
  $('.Win').show(500).append("<span class='winmessage'>It's a Draw!</span>");
  $("#winnerSound")[0].play();
  }
};

//the play again window
$(document).on('click', '.playagain', function(){
  $('.Win').hide();
  reset();
});

var xplayer = false;
var oplayer = false;

//this is initiated when any box in tic tac toe is clicked
$(document).on('click', '.box', function(){
  if (xplayer) {
    if (numClicks % 2 === 0) {
    $(this).text('X');
    $(this).removeClass('box').addClass('hiddenO').css({'display':'inline-block'});
    numClicks++;
    checkClass();
    }
    else {
    $(this).text('O');
    $(this).removeClass('box').addClass('hidden').css({'display':'inline-block'});
    numClicks++;
    checkClass();
    }
  } else if (oplayer){
  if (numClicks % 2 === 0) {
  $(this).text('O');
  $(this).removeClass('box').addClass('hidden').css({'display':'inline-block'});
  numClicks++;
  checkClass();
  }
  else {
  $(this).text('X');
  $(this).removeClass('box').addClass('hiddenO').css({'display':'inline-block'});
  numClicks++;
  checkClass();
  }
}
});

//initial chooseplayer screen
$(document).on('click', '.chooseplayer', function(){
  if ($(this).hasClass('x')){
    xplayer = true;
    $('.Player').addClass('hide');
  } else {
    oplayer = true;
    $('.Player').addClass('hide');
  }
});

//All my logic for X winning
let XWins123 = function(){
  if ($('#box1').hasClass("hiddenO") && $('#box2').hasClass("hiddenO") && $('#box3').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let XWins456 = function() {
  if ($('#box4').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box6').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let XWins789 = function(){
  if ($('#box7').hasClass("hiddenO") && $('#box8').hasClass("hiddenO") && $('#box9').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};


let XWins147 = function(){
  if ($('#box1').hasClass("hiddenO") && $('#box4').hasClass("hiddenO") && $('#box7').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let XWins258 = function() {
  if ($('#box2').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box8').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let XWins369 = function(){
  if ($('#box3').hasClass("hiddenO") && $('#box6').hasClass("hiddenO") && $('#box9').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let XWins159 = function() {
  if ($('#box1').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box9').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let XWins357 = function(){
  if ($('#box3').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box7').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

//All logic for O Winning

let OWins123 = function(){
  if ($('#box1').hasClass("hidden") && $('#box2').hasClass("hidden") && $('#box3').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let OWins456 = function() {
  if ($('#box4').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box6').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let OWins789 = function(){
  if ($('#box7').hasClass("hidden") && $('#box8').hasClass("hidden") && $('#box9').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};


let OWins147 = function(){
  if ($('#box1').hasClass("hidden") && $('#box4').hasClass("hidden") && $('#box7').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let OWins258 = function() {
  if ($('#box2').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box8').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let OWins369 = function(){
  if ($('#box3').hasClass("hidden") && $('#box6').hasClass("hidden") && $('#box9').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let OWins159 = function() {
  if ($('#box1').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box9').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let OWins357 = function(){
  if ($('#box3').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box7').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let oAudio = $("#oSound")[0];
  $(".o").mouseenter(function() {
	oAudio.play();
});

let xAudio = $("#xSound")[0];
  $(".x").mouseenter(function() {
  xAudio.play();
});
