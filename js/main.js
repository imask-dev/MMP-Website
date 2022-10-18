const date = new Date();

const today = date.getDay();
const hours = date.getHours();
const year = date.getFullYear();

if (today === 0) {
  document.getElementById("storeStatus").innerHTML = "CLOSED TODAY";
} else {
  if (hours >= 10 && hours < 19) {
    document.getElementById("storeStatus").innerHTML = "OPEN NOW";
  } else if (hours >= 19 && hours < 21) {
    document.getElementById("storeStatus").innerHTML = "CLOSING SOON";
  } else {
    document.getElementById("storeStatus").innerHTML = "CLOSED NOW";
  }
}

document.getElementById("currentYear").innerHTML = year;

function myFunction1() {
  let dots1 = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  let dots2 = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  let dots3 = document.getElementById("dots3");
  let moreText = document.getElementById("more3");
  let btnText = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  let dots4 = document.getElementById("dots4");
  let moreText = document.getElementById("more4");
  let btnText = document.getElementById("myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}