const date = new Date();
const today = date.getDay();
const hour = date.getHours();
const year = date.getFullYear();

function openClose() {
  let storeStatus = document.querySelector("#storeStatus");
  if (today === 0) storeStatus.innerHTML = "CLOSED TODAY";
  else {
    if (hour >= 10 && hour < 19) storeStatus.innerHTML = "OPEN NOW";
    else if (hour >= 19 && hour < 21) storeStatus.innerHTML = "CLOSING SOON";
    else storeStatus.innerHTML = "CLOSED NOW";
  }
  document.querySelector("#currentYear").innerHTML = year;
}
openClose();

function btnPressed() {
  let blogBtn = document.querySelectorAll(".blog button");

  for (i = 0; i < blogBtn.length; i++) {
    blogBtn[i].addEventListener("click", updateValue);

    function updateValue() {
      let dots = this.parentElement.querySelector("#dots");
      let more = this.parentElement.querySelector("#more");
      let btnText = this.parentElement.querySelector("button");

      switch (btnText.value) {
        case "off":
          dots.style.display = "none";
          more.style.display = "inline";
          btnText.innerHTML = "Read less";
          btnText.value = "on";
          break;
        case "on":
          dots.style.display = "inline";
          more.style.display = "none";
          btnText.innerHTML = "Read more";
          btnText.value = "off";
          break;
        default:
          console.log(btnText.value);
      }
    }
  }
}
btnPressed();