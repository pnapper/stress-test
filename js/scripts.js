var stressSigns = function(warningSigns) {
  if (warningSigns >= [3]) {
  return "Get some help.";
}
};



$(document).ready(function() {
  $("form#stress-test").submit(function(event) {

    event.preventDefault();
    var arrayOfSickness = [];
    $("#result").show();
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSigns = $(this).val();
      arrayOfSickness.push(warningSigns);
    $("#result").append(warningSigns + "<br>");
  });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var healthSymptoms = $(this).val();
    $("#result").append(healthSymptoms + "<br>");
  });
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var copingMethods = $(this).val();
    $("#result").append(copingMethods + "<br>");
  });
    $("#stress-test").hide();

    console.log(arrayOfSickness.length);
  });
});
