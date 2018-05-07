function da1a2() {
  $("#slideshow").removeClass("foto1").addClass("foto2")
  }

function da2a3() {
  $("#slideshow").removeClass("foto2").addClass("foto3")
  }

function da3a4() {
  $("#slideshow").removeClass("foto3").addClass("foto4")
  }

function da4a5() {
  $("#slideshow").removeClass("foto4").addClass("foto5")
  }

function da5a6() {
  $("#slideshow").removeClass("foto5").addClass("foto6")
  }

function da6a7() {
  $("#slideshow").removeClass("foto6").addClass("foto7")
  }

function da7a8() {
  $("#slideshow").removeClass("foto7").addClass("foto8")
  }

function da8a9() {
  $("#slideshow").removeClass("foto8").addClass("foto9")
  }

function da9a1() {
  $("#slideshow").removeClass("foto9").addClass("foto1")
  }

function da1a9() {
  $("#slideshow").removeClass("foto1").addClass("foto9")
  }

function da9a8() {
  $("#slideshow").removeClass("foto9").addClass("foto8")
  }

function da8a7() {
  $("#slideshow").removeClass("foto8").addClass("foto7")
  }

function da7a6() {
  $("#slideshow").removeClass("foto7").addClass("foto6")
  }

function da6a5() {
  $("#slideshow").removeClass("foto6").addClass("foto5")
  }

function da5a4() {
  $("#slideshow").removeClass("foto5").addClass("foto4")
  }

function da4a3() {
  $("#slideshow").removeClass("foto4").addClass("foto3")
  }

function da3a2() {
  $("#slideshow").removeClass("foto3").addClass("foto2")
  }

function da2a1() {
  $("#slideshow").removeClass("foto2").addClass("foto1")
  }

function alclickdx() {
  if ($("#slideshow").hasClass("foto1")) {da1a2()}
  else if ($("#slideshow").hasClass("foto2")) {da2a3()}
  else if ($("#slideshow").hasClass("foto3")) {da3a4()}
  else if ($("#slideshow").hasClass("foto4")) {da4a5()}
  else if ($("#slideshow").hasClass("foto5")) {da5a6()}
  else if ($("#slideshow").hasClass("foto6")) {da6a7()}
  else if ($("#slideshow").hasClass("foto7")) {da7a8()}
  else if ($("#slideshow").hasClass("foto8")) {da8a9()}
  else if ($("#slideshow").hasClass("foto9")) {da9a1()}
  }

function alclicksx() {
  if ($("#slideshow").hasClass("foto1")) {da1a9()}
  else if ($("#slideshow").hasClass("foto9")) {da9a8()}
  else if ($("#slideshow").hasClass("foto8")) {da8a7()}
  else if ($("#slideshow").hasClass("foto7")) {da7a6()}
  else if ($("#slideshow").hasClass("foto6")) {da6a5()}
  else if ($("#slideshow").hasClass("foto5")) {da5a4()}
  else if ($("#slideshow").hasClass("foto4")) {da4a3()}
  else if ($("#slideshow").hasClass("foto3")) {da3a2()}
  else if ($("#slideshow").hasClass("foto2")) {da2a1()}
  }

$("#frecciadx").on("click", alclickdx)

$("#frecciasx").on("click", alclicksx)
