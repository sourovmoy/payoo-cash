//             ToggleEvent features

// for add money section

document.getElementById("add-money-div").addEventListener("click", function () {
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";

  document.getElementById("add-money").style.display = "block";
});
// for cash out section
document.getElementById("cash-out-div").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";

  document.getElementById("cash-out").style.display = "block";
});
// for transfer money section
document
  .getElementById("transfer-money-div")
  .addEventListener("click", function () {
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";

    document.getElementById("transfer-money").style.display = "block";
  });
// for get bonus section
document.getElementById("get-bonus-div").addEventListener("click", function () {
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";

  document.getElementById("get-bonus").style.display = "block";
});
// for pay bill section
document.getElementById("pay-bill-div").addEventListener("click", function () {
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("transaction").style.display = "none";

  document.getElementById("pay-bill").style.display = "block";
});
// for transaction section
document
  .getElementById("transaction-div")
  .addEventListener("click", function () {
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("add-money").style.display = "none";

    document.getElementById("transaction").style.display = "block";
  });

//        event featuse

// add money event features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = parseInt(
      document.getElementById("account-money").innerText
    );
    const enterAmount = parseInt(document.getElementById("enter-amount").value);

    const accountNumber = document.getElementById("enter-account").value;
    const fixedPin = 1234;
    const enterPin = parseInt(document.getElementById("enter-pin").value);

    if (accountNumber.length !== 11) {
      alert("Please enter a valid 11 digit account number");
      return;
    }
    if (enterPin !== fixedPin) {
      alert("Please enter a valid 4 digit pin number");
      return;
    }
    const totalAmount = accountBalance + enterAmount;
    document.getElementById("account-money").innerText = totalAmount;
  });
