function trasforma() {
  if ($(this).hasClass("oscillazione")) $(this).removeClass("oscillazione").removeClass("middle")
  else if ($(this).hasClass("middle")) $(this).addClass("oscillazione")
  else $(this).addClass("middle")
}

$(".quadrato").on("click", trasforma);
