document
  .getElementById("lonin-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobNum = "01742818496";
    const fixPin = "1234";
    const inputMobNum = document.getElementById("mobile-input").value;
    const inputPinNum = document.getElementById("pin-input").value;

    if (inputMobNum === mobNum && inputPinNum === fixPin) {
      console.log("ok");
      window.location.href = "./home.html";
    } else {
      alert("Invalid Mobile Number or Pin Number");
    }
  });
