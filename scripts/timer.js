let totalSeconds = 10 * 3600 + 50 * 60 + 35;

function toPersianDigits(num) {
  return num.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

function offerTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("hours").textContent = toPersianDigits(hours);
  document.getElementById("minutes").textContent = toPersianDigits(minutes);
  document.getElementById("seconds").textContent = toPersianDigits(seconds);

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    document.querySelector("#seconds").remove();
    document.querySelector("#minutes").remove();
    document.querySelector("#hours").remove();
    document.querySelector("#timerContainer").innerHTML =
      "<span>پایان تخفیف </span>";
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(offerTimer, 1000);
offerTimer();
