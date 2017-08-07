const checkClass = function(){
  if (logic1() || logic2() || logic3() || logic4() || logic5() || logic6() || logic7() || logic8() || logic9() || logic10() || logic11() || logic12() || logic13() || logic14() || logic15() || logic16()){
  alert ("you have won!");
  reset();
}
};

let numClicks = 0;

const reset = function(){
  $('.hidden').removeClass('hidden').addClass('box').text('');
  $('.hiddenO').removeClass('hiddenO').addClass('box').text('');
}

let noWin = function(){
  if (numClicks === 9){
    reset();
  }
}

$(document).on('click', '.box', function(){
  if (numClicks % 2 === 0) {
    $(this).text('X');
  $(this).removeClass('box').addClass('hiddenO').css({'display':'inline-block'});
  numClicks++;
  checkClass();
  noWin();
  }
  else {
  $(this).text('O');
  $(this).removeClass('box').addClass('hidden').css({'display':'inline-block'});
  numClicks++;
  checkClass();
  noWin();
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
