let boardArray = [1,2,3,4,5,6,7,8,9];

let xPlayer = true;
let oPlayer = false;

if iddiv1

$(document).on('click', '.chooseplayer', function(){
  if ($(this).hasClass('x')){
    xPlayer = true;
    $('.Player').addClass('hide');
  } else {
    oPlayer = true;
    $('.Player').addClass('hide');
  }
});


$(document).on('click', '.box', function(){
  if (xplayer) {
    $(this).text('X');
    $(this).removeClass('box').addClass('hiddenO').css({'display':'inline-block'});
    numClicks++;
    checkClass();
    xPlayer = false;
    oPlayer = true;
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
  $(this).removeClass('box').addClass('hiddenO').css({'display':'inline-block'});
  numClicks++;
  checkClass();
  }
  else {
  $(this).text('X');
  $(this).removeClass('box').addClass('hidden').css({'display':'inline-block'});
  numClicks++;
  checkClass();
  }
}
});


const checkClass = function(){
  if (logic1() || logic2() || logic3() || logic4() || logic5() || logic6() || logic7() || logic8()) {
  $('.Win').show(500).append("X Wins");
    Xwins++;
    $('.counterXWins').text(Xwins);
  }  else if (logic9() || logic10() || logic11() || logic12() || logic13() || logic14() || logic15() || logic16()){
  Message = "O Wins!"
  $('.Win').show(500).append('O Wins');
  Owins++;
  $('.counterOWins').text(Owins);
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
  $('.Player').toggleClass('hide');
}

let noWin = function(){
  if (numClicks === 9){
  $('.Win').show(500).append('Its a Draw!');
  }
};

$(document).on('click', '.playagain', function(){
  $('.Win').hide();
  reset();
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
