var unlucky = 0
var lucky = 0
$(document).ready(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault()
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unlucky++;
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      lucky++;
    });
    if ((unlucky > 4) && (lucky < 4)) {
      $("#unlucky").show();
      $("#lucky").hide();
      $("#inbetween").hide();
    }
    if ((unlucky < 4) && (lucky > 4)) {
      $("#unlucky").hide();
      $("#lucky").show();
      $("#inbetween").hide();
    }
    if ((unlucky === 4) && (lucky === 4)) {
      $("#unlucky").hide();
      $("#lucky").hide();
      $("#inbetween").show();
    }
  });
});
