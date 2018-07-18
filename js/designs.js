

//makeGrid function that is called when user submits form
function makeGrid() {
  var row = $("#inputHeight").val();
  var clm = $("#inputWeight").val();
  var table = $("#pixelCanvas");

  table.children().remove();
  
var x, y;
  for (x = 0; x < row; x++) {
    table.append("<tr></tr>");
   }
  for (y = 0; y < clm; y++) {
    $("tr").append("<td class=data></td>");
   }
}

//event that creates the grid when the form is submitted
$(document).ready(function(){
    $("#sizePicker").submit(function(e){
      e.preventDefault();      
      makeGrid();
    });
  });

//changes the cell clicked on to selected colour
  $("table").click(function(event) {
    colour = $("#colorPicker").val();
    $(event.target).attr("style", "background-color: " + colour);
  })
