console.log("%cHello and welcome to my Tic Tac Toe!", "background: rgba(136, 4, 247, 0.87);color:#FFF;padding:5px;border-radius: 5px;line-height: 26px;");


console.log ("%c_X_|_O_|_X_","background: rgb(246, 48, 208);color:#FFF;padding:2px;border-radius: 5px;line-height: 10px;");
console.log ("%c_O_|_X_|_X_", "background: rgb(246, 48, 208);color:#FFF;padding:2px;border-radius: 5px;line-height: 10px;");
console.log ("%c_O_|_X_|_O_", "background: rgb(246, 48, 208);color:#FFF;padding:2px;border-radius: 5px;line-height: 10px;");

const checkClass = function(){
  if (logic1() || logic2() || logic3() || logic4() || logic5() || logic6() || logic7() || logic8()) {
  $('.Win').show(500).append("<span class='winmessage'>X Wins</span>");
    Xwins++;
    $('.counterXWins').text(Xwins);
    $("#winnerSound")[0].play();
  }  else if (logic9() || logic10() || logic11() || logic12() || logic13() || logic14() || logic15() || logic16()){
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

const reset = function(){
  $('.hidden').removeClass('hidden').addClass('box').text('');
  $('.hiddenO').removeClass('hiddenO').addClass('box').text('');
  numClicks = 0;
  $('.winmessage').remove();
  $('.Player').removeClass('hide');
}

let noWin = function(){
  if (numClicks === 9){
  $('.Win').show(500).append("<span class='winmessage'>It's a Draw!</span>");
  $("#winnerSound")[0].play();
  }
};

$(document).on('click', '.playagain', function(){
  $('.Win').hide();
  reset();
});

var xplayer = false;
var oplayer = false;

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


$(document).on('click', '.chooseplayer', function(){
  if ($(this).hasClass('x')){
    xplayer = true;
    $('.Player').addClass('hide');
  } else {
    oplayer = true;
    $('.Player').addClass('hide');
  }
});


let logic1 = function(){
  if ($('#box1').hasClass("hiddenO") && $('#box2').hasClass("hiddenO") && $('#box3').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic2 = function() {
  if ($('#box4').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box6').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic3 = function(){
  if ($('#box7').hasClass("hiddenO") && $('#box8').hasClass("hiddenO") && $('#box9').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};


let logic4 = function(){
  if ($('#box1').hasClass("hiddenO") && $('#box4').hasClass("hiddenO") && $('#box7').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic5 = function() {
  if ($('#box2').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box8').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic6 = function(){
  if ($('#box3').hasClass("hiddenO") && $('#box6').hasClass("hiddenO") && $('#box9').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic7 = function() {
  if ($('#box1').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box9').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic8 = function(){
  if ($('#box3').hasClass("hiddenO") && $('#box5').hasClass("hiddenO") && $('#box7').hasClass("hiddenO")) {
    return true;
  } else {
    return false;
  }
};

let logic9 = function(){
  if ($('#box1').hasClass("hidden") && $('#box2').hasClass("hidden") && $('#box3').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let logic10 = function() {
  if ($('#box4').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box6').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let logic11 = function(){
  if ($('#box7').hasClass("hidden") && $('#box8').hasClass("hidden") && $('#box9').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};


let logic12 = function(){
  if ($('#box1').hasClass("hidden") && $('#box4').hasClass("hidden") && $('#box7').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let logic13 = function() {
  if ($('#box2').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box8').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let logic14 = function(){
  if ($('#box3').hasClass("hidden") && $('#box6').hasClass("hidden") && $('#box9').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let logic15 = function() {
  if ($('#box1').hasClass("hidden") && $('#box5').hasClass("hidden") && $('#box9').hasClass("hidden")) {
    return true;
  } else {
    return false;
  }
};

let logic16 = function(){
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
