$("p").hide();

// $("#img1").on("click", function () {
//   $("#p1").slideToggle(500);
// });
// $("#img2").on("click", function () {
//   $("#p2").slideToggle(500);
// });
// $("#img3").on("click", function () {
//   $("#p3").slideToggle(500);
// });

$("img").on("click", function () {
  $(this).next().next().slideToggle(500);
});
