

function getIt()
{
  $("p").on("click", function(){
    alert("Hey!")
  })
}

function frameIt()
{
  $("img").on("load", function(){
    $("img").addClass("tasty")
  })
}


function pressIt()
{
  $("input").on("keydown", function(key) {
  if ( key.which == 71 ) {
    alert('you entered G');
    return;
  }});
}

function submitIt()
{
  $("form").on("submit", function() {
  
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();

$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

});
