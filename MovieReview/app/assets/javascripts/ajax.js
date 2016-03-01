$(document).ready(function() {
  // send off the query
  $.ajax({
     type: "GET",
        dataType: "json",
        url: "http://www.omdbapi.com/?s=Batman&type=movie",
        success: function(data){
          console.log(data["Search"][0].Title);
        },
        async:false,
        error: function() {
        }
  });

  $.ajax({
     type: "POST",
        dataType: "json",
        url: "/movies/",
        data: {title: "this sucks"}, 
        async:false,
        error: function() {
        }
  });


});
 