/*
 *            shared function
 */
// for input value

function findInputValue(id) {
  const findId = document.getElementById(id);
  const findValue = findId.value;
  const findValueNum = parseInt(findValue);
  return findValueNum;
}
// for inner text
function findInputText(id) {
  const findId = document.getElementById(id);
  const findText = findId.innerText;
  const findValueText = parseInt(findText);
  return findValueText;
}
// pin varifying function
function pinCheck(Pin) {
  const fixedPin = 1234;
  if (Pin !== fixedPin) {
    alert("Please enter a valid 4 digit pin number");
    return;
  }
}
// for select bank option value
function findBankValue(id) {
  const findId = document.getElementById(id);
  const findBank = findId.value;
  return findBank;
}

// logout function
document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});

// ToggleEvent features
function display(id) {
  const forms = document.getElementsByClassName("form");

  for (let form of forms) {
    form.classList.remove("bg-[#0874f20d]", "border-1", "border-[#0874f2]");
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// card style
function cardStyle(id) {
  const cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.classList.remove("bg-[#0874f20d]", "border-3", "border-[#0874f2]");
  }

  document
    .getElementById(id)
    .classList.add("bg-[#0874f20d]", "border-3", "border-[#0874f2]");
  document
    .getElementById(id)
    .classList.remove("border-1", "border-[#0808081a]");
}

/*
 *           ToggleEvent features
 */

// for add money section

document.getElementById("add-money-div").addEventListener("click", function () {
  display("add-money");
  cardStyle("add-money-div");
});
// for cash out section
document.getElementById("cash-out-div").addEventListener("click", function () {
  display("cash-out");
  cardStyle("cash-out-div");
});
// for transfer money section
document
  .getElementById("transfer-money-div")
  .addEventListener("click", function () {
    display("transfer-money");
    cardStyle("transfer-money-div");
  });
// for get bonus section
document.getElementById("get-bonus-div").addEventListener("click", function () {
  display("get-bonus");
  cardStyle("get-bonus-div");
});
// for pay bill section
document.getElementById("pay-bill-div").addEventListener("click", function () {
  display("pay-bill");
  cardStyle("pay-bill-div");
});
// for transaction section
document
  .getElementById("transaction-div")
  .addEventListener("click", function () {
    display("transaction");
    cardStyle("transaction-div");
  });

//        event featuse

// add money event features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = findInputText("account-money");
    const enterAmount = findInputValue("enter-add-amount");
    const accountNumber = findInputValue("enter-bank-account");
    const fixedPin = 1234;
    const enterPin = findInputValue("enter-add-amount-pin");

    if (accountNumber.toString().length !== 11) {
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

// cash out event features
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = findInputText("account-money");
    const enterAmount = findInputValue("enter-cashOut-amount");
    const accountNumber = findInputValue("enter-agent-account");

    const enterPin = findInputValue("cash-out-pin");
    pinCheck(enterPin);

    if (accountNumber.toString().length !== 11) {
      alert("Please enter a valid 11 digit account number");
      return;
    }
    const totalAmount = accountBalance - enterAmount;
    document.getElementById("account-money").innerText = totalAmount;
  });
// transfer money event features
document
  .getElementById("Transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = findInputText("account-money");
    const enterAmount = findInputValue("transfer-money-amount");
    const accountNumber = findInputValue("transfer-money-account");
    const enterPin = findInputValue("transfer-money-pin");
    pinCheck(enterPin);

    if (accountNumber.toString().length !== 11) {
      alert("Please enter a valid 11 digit account number");
      return;
    }

    const totalAmount = accountBalance - enterAmount;
    document.getElementById("account-money").innerText = totalAmount;
  });
// get bonus event features
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = findInputText("account-money");
    const selectBank = "Sonali Bank";
    const selectCoupon = 101010;
    const bank = findBankValue("banks-option");
    const coupon = findInputValue("enter-bonus-coupon");
    const bonusAmount = 1000;

    if (bank === selectBank && coupon === selectCoupon) {
      const totalAmount = accountBalance + bonusAmount;
      document.getElementById("account-money").innerText = totalAmount;
    }
  });
// paybill event features
document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = findInputText("account-money");
    const selectBank = "Islami Bank";
    const bank = findBankValue("paybill-banks-option");
    const billerAccount = findInputValue("biller-account-number");
    const billerAmount = findInputValue("paybill-amount");
    const enterPin = findInputValue("paybill-pin");
    pinCheck(enterPin);
    if (bank === selectBank && billerAccount.toString().length === 11) {
      const totalAmount = accountBalance - billerAmount;
      document.getElementById("account-money").innerText = totalAmount;
    }
  });
