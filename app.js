window.addEventListener("load", function () {
  let allCards = document.querySelectorAll(".card");

  // retrieve first section and expand it
  let firstSection = allCards[0].querySelector(".collapse");
  firstSection.classList.add("show");

  // remove "next" button from the last section
  let lastSection = allCards[allCards.length - 1]
    .querySelector(".btn-next")
    .remove();
});

function expandNextSection(e) {
  let currentCard = e.closest(".card");
  let nextCard = currentCard.nextElementSibling;

  let nextCardCollapsibleSection = nextCard.querySelector(".collapse").id;
  //let nextSectionID = "#" + nextCardCollapsibleSection;

  //   e.setAttribute("data-toggle", "collapse");
  //   e.setAttribute("data-target", nextSectionID);
  //   e.setAttribute("data-expanded", "false");
  e.setAttribute("data-controls", "nextCardCollapsibleSection");
}
