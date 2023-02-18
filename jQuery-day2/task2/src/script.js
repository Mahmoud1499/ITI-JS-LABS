$(function () {
  $("img").draggable();

  $("img").one("mouseenter", function () {
    $("img").effect("shake");
  });

  $("#blackHole").droppable({
    drop: function () {
      $("img").css("visibility", "hidden");
      console.log("Dropped");
    },
  });
});
