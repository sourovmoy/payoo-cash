function cardStyle(id) {
  const cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.classList.remove("bg-[#0874f20d]");
  }

  document
    .getElementById(id)
    .classList.add("bg-[#0874f20d]", "border-3", "border-[#0874f2]");
  document
    .getElementById(id)
    .classList.remove("border-1", "border-[#0808081a]");
}
document.getElementById("cash-out-div").addEventListener("click", function () {
  cardStyle("cash-out-div");
});
