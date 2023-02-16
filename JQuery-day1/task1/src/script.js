var animationSpeed = 1000;

$(function () {
  $(".imageSlides").css("display", "none");
  $(".slides> div:first").show();
  interval = setInterval(function () {
    $(".slides> div:first")
      .hide()
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo(".slides");
  }, 2000);
});

$(".stop").click(function () {
  clearInterval(interval);
});
