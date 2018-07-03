function vaidxh() {
  $("#quadrato").removeClass("topleft");
  $("#quadrato").addClass("topright");
  }

function vaidxl() {
  $("#quadrato").removeClass("topright");
  $("#quadrato").addClass("bottomright");
  }

function vaisxl() {
  $("#quadrato").removeClass("bottomright");
  $("#quadrato").addClass("bottomleft");
  }

function vaisxh() {
  $("#quadrato").removeClass("bottomleft");
  $("#quadrato").addClass("topleft");
  }

function qndclick() {
  if($("#quadrato").hasClass("topleft")) {vaidxh();} else
  if($("#quadrato").hasClass("topright")) {vaidxl();} else
  if($("#quadrato").hasClass("bottomright")) {vaisxl();} else
  if($("#quadrato").hasClass("bottomleft")) {vaisxh();};
  }

$("#quadrato").on("click", qndclick);
