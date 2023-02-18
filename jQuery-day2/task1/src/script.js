var input = $(".input");
var submit = $(".add");
var tasksDiv = $(".tasks");
// console.log(input, submit, tasksDiv);
let arrayOfTasks = [];

// Add Task
submit.on("click", function (e) {
  e.preventDefault();
  if (input.val() !== "") {
    //add task to array
    var task = input.val();
    arrayOfTasks.push(task);
    //empty tasks div
    tasksDiv.html("");
    //Display  each task
    arrayOfTasks.forEach((task) => {
      //main div and text
      var div = $("<span>", { class: "task" });
      $(div).appendTo(tasksDiv);
      var p = $("<p>").html(task);
      $(p).appendTo(div);
      // buttons
      $("<span>", { class: "doneSpan" }).html("Done").appendTo(div);
      $("<span>", { class: "delSpan" }).html("Delete").appendTo(div);
    });
    // free input text
    input.val("");
  }
});

$(".tasks").on("click", ".doneSpan", function () {
  //done Butun
  $(this).parent(".task").toggleClass("done");
  // console.log($(this));
});

$(".tasks").on("click", ".delSpan", function () {
  //done Butun
  $(this).parent(".task").hide();
  // console.log($(this));
  // console.log($(this).parent().find("p").html());
  arrayOfTasks.splice(
    arrayOfTasks.lastIndexOf($(this).parent().find("p").html()),
    1
  );
});
