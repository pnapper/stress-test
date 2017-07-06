var stressSigns = function(warningSigns) {
  if (warningSigns >= [3]) {
  return "Get some help.";
}
};



$(document).ready(function() {
  $("form#stress-test").submit(function(event) {

    event.preventDefault();
    var arrayOfSickness = [];
    var arrayOfSymptoms = [];
    var arrayOfCoping = [];
    $("#result").show();
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSigns = $(this).val();
      arrayOfSickness.push(warningSigns);
    $("#result").append(warningSigns + "<br>");
  });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var healthSymptoms = $(this).val();
      arrayOfSymptoms.push(healthSymptoms);
    $("#result").append(healthSymptoms + "<br>");
  });
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var copingMethods = $(this).val();
      arrayOfCoping.push(copingMethods);
    $("#result").append(copingMethods + "<br>");
  });
    $("#stress-test").hide();
    if ($("input:checkbox[name=warning-signs]:checked").length >=2) {
      $("#allGood").show();
    } else if (arrayOfSickness.length >=3 || arrayOfSymptoms.length >=3) {
      $("#help").show();
    }
  });

  //  console.log(arrayOfSickness.length);
});
