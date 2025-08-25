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
