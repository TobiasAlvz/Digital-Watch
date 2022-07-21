const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  var dateToday = new Date();
  var hr = dateToday.getHours();
  var mn = dateToday.getMinutes();
  var s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (mn < 10) mn = "0" + mn;
  if (s < 10) s = "0" + s;
  hours.textContent = hr;
  minutes.textContent = mn;
  seconds.textContent = s;
});
