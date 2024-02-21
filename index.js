let btn = document.querySelector("button");
let display1 = document.querySelector(".lower-section");
let input = document.querySelector("input");
let qrimg = document.querySelector(".lower-section img");
let show = true;
function displayQr() {
  let newele = input.value;
  if (!newele) return;
  qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${newele}`;
  console.log(newele);
  if (show) {
    display1.style.display = "flex";

    show = false;
  } else {
    display1.style.display = "none";
    show = true;
  }
}
