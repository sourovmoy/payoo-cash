document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = document.getElementById("account-money").innerText;
    console.log(accountBalance);
    const enterAmount = document.getElementById("enter-amount").value;
    console.log(enterAmount);
  });
