/* A01039543 */

/*
function TodoPost(e) {
  e.preventDefault();

  var todo = document.getElementById("todoText").value;
  var list = document.getElementById("todoList");

  let currentList = list.innerHTML;
  list.innerHTML = currentList + `<input type = "checkbox" name="todo" />  ${todo}  <br>  `

} */

$("#ButtonPost").on("click", function(post) {
    post.preventDefault();
    
    var todo = $("#todoText").val();
    
    $("#todoList").append(`<span name="text"> <input type="checkbox" name="todo" />${todo} <br> </span>`);
})


/*
function TodoClear(e) {
  e.preventDefault();

  var list = document.getElementById("todoList").childNodes;

  for (var i = 0; i < list.length; i++) {
    list[i].checked = false;
  }
}*/

$("#ButtonClear").on("click", function(clear) {
    clear.preventDefault();
    
    var list = $("[name=todo]");
    
    for (var i = 0; i < list.length; i++) {
        list[i].checked = false;
    }
})


/*
function TodoMark(e) {
  e.preventDefault();

  var list = document.getElementById("todoList").childNodes;

  for (var i = 0; i < list.length; i++) {
    list[i].checked = true;
  }
}*/

$("#ButtonMark").on("click", function(mark) {
    mark.preventDefault();

    var list = $("[name=todo]");
    
    for (var i = 0; i < list.length; i++) {
        list[i].checked = true;
    }
})

/*
function TodoDel(e) {
  e.preventDefault();

  var parent = document.getElementById("todoList");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}*/

$("#ButtonDelete").on("click", function(del) {
    del.preventDefault();

    var list = $("[name=text]");
    
    for (var i = 0; i < list.length; i++) {
        list[i].remove();
    }
})