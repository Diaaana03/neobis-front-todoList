///time

const data = new Date();

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

document.getElementById("date").innerHTML = today.toDateString();

function time() {
  const data = new Date();

  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  document.getElementById("hour").innerHTML = h + ":" + m + ":" + s;
  setTimeout("time()", 500);
}

///time
