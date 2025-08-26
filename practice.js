// function display(id) {
//   const divs = document.querySelectorAll(".toggle-section div");

//   for (let div of divs) {
//     div.style.display = "none";
//   }

//   document.getElementById(id).style.display = "block";
// }

// document.getElementById("add-money-div").addEventListener("click", function () {
//   display("add-money");
// });

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

// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const accountBalance = findInputText("account-money");
//     const enterAmount = findInputValue("enter-amount");
//     const accountNumber = findInputValue("enter-account");
//     const fixedPin = 1234;
//     const enterPin = findInputValue("enter-pin");

//     if (accountNumber.toString().length !== 11) {
//       alert("Please enter a valid 11 digit account number");
//       return;
//     }
//     if (enterPin !== fixedPin) {
//       alert("Please enter a valid 4 digit pin number");
//       return;
//     }
//     const totalAmount = accountBalance + enterAmount;
//     document.getElementById("account-money").innerText = totalAmount;
//   });
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = findInputText("account-money");
    const enterAmount = findInputValue("enter-cashOut-amount");
    const accountNumber = findInputValue("enter-agent-account");
    const fixedPin = 1234;
    const enterPin = findInputValue("cash-out-pin");

    if (accountNumber.toString().length !== 11) {
      alert("Please enter a valid 11 digit account number");
      return;
    }
    if (enterPin !== fixedPin) {
      alert("Please enter a valid 4 digit pin number");
      return;
    }
    const totalAmount = accountBalance - enterAmount;
    document.getElementById("account-money").innerText = totalAmount;
  });
