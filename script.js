const targetDate = new Date("December 15, 2024 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `${days} Days`;
  document.getElementById("hours").innerHTML = `${hours} Hours`;
  document.getElementById("minutes").innerHTML = `${minutes} Minutes`;
  document.getElementById("seconds").innerHTML = `${seconds} Seconds`;

  if (distance < 0) {
    document.getElementById("days").innerHTML = "0 Days";
    document.getElementById("hours").innerHTML = "0 Hours";
    document.getElementById("minutes").innerHTML = "0 Minutes";
    document.getElementById("seconds").innerHTML = "0 Seconds";
  }
}, 1000);
