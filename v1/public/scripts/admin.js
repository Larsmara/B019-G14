$(document).ready(function(){
    console.log("hi");

    $("#showBtn").on("click", function(){
      var id = $(this).attr("data-id");
      var id2 = $("#projShow").attr("data-id");
      if(id === id2){
        $("#projShow").removeClass("hidden");
      }
    })

});