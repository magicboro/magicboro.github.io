$(document).ready(function(){
    $("#logo1").fadeIn(2000);
    setTimeout(function(){
      $("#logo1").hide(0, function(){
          $("#logo2").show();
          $("#fio").show();
          $("#contacts").show();
          $("#website").css("background", "#263238");
        });
      }, 2000);
    $('#website').click(function(){
      $('#logo1').hide(0, function(){
          $("#logo2").show();
          $("#fio").show();
          $("#contacts").show();
          $("#website").css("background", "#263238");
        });
    });
    $("#logo").on({
      mouseenter: function(){
        $("#website").css({
          "background": "#3949AB",
          "transition": "400ms"
        });
        $(this).css({
          'transform': 'rotate(-90deg)',
          'margin-left': '-20px'
        });
      },
      mouseleave: function(){
        $("#website").css({
          "background": "#263238"
        });
        $(this).css({
          'transform': 'rotate(0deg)',
          'margin-left': '0px'
        });
      }
    });
});
