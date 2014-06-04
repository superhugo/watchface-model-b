$(function() {

  function displayTime() {
    var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

    if (hours > 12) {
      hours = hours - 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    $(".is-active").attr("class", "");

    $("rect").css("fill", "#eee");
    $("#minutes").css("fill", "#222");
    $("#mm").text(minutes);

    var h = 1;
    while (h <= hours) {
      $("#h-" + h).attr("class", "is-active");
      h++;
    }
  }

  setInterval(displayTime, 1000);
});
