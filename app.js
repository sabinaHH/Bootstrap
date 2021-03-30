window.addEventListener("load", function () {
  let allCards = document.querySelectorAll(".card");

  // retrieve first section and expand it
  let firstSection = allCards[0].querySelector(".collapse");
  firstSection.classList.add("show");
  allCards[0].classList.add("bs-callout-custom");

  // remove "next" button from the last section
  let lastSection = allCards[allCards.length - 1]
    .querySelector(".btn-next")
    .remove();

  let allExpandTriggers = document.querySelectorAll(".collapsed");

  allExpandTriggers.forEach((item) => {
    item.addEventListener("click", function () {
      setTimeout(function () {
        let currentSection = item.closest(".card").querySelector(".collapse");
        if (currentSection.classList.contains("show")) {
          toggleSuccess();
        }
      }, 500);
    });
  });
});

function expandNextSection(e) {
  let currentCard = e.closest(".card");
  let nextCard = currentCard.nextElementSibling;

  currentCard.classList.add("bs-callout-success");
  nextCard.classList.add("bs-callout-custom");

  let nextCardCollapsibleSection = nextCard.querySelector(".collapse").id;
  //let nextSectionID = "#" + nextCardCollapsibleSection;

  //   e.setAttribute("data-toggle", "collapse");
  //   e.setAttribute("data-target", nextSectionID);
  //   e.setAttribute("data-expanded", "false");
  e.setAttribute("data-controls", "nextCardCollapsibleSection");

  // let nextCard = currentCard.nextElementSibling;

  // if (nextCard !== null && !nextCard.classList.contains("bs-callout-success")) {
  //   nextCard.classList.add("bs-callout-custom");
  // }
}

function changeColour(e) {
  var currentlyActive = document.querySelector(".bs-callout-custom");

  if (currentlyActive !== null) {
    currentlyActive.classList.remove("bs-callout-custom");
    currentlyActive.classList.add("bs-callout-success");
  }

  let currentCard = e.closest(".card");
  currentCard.style.background = "yellow";

  if (
    !currentCard.classList.contains("bs-callout-custom") &&
    !currentCard.classList.contains("bs-callout-success")
  ) {
    currentCard.classList.add("bs-callout-custom");
  } else {
    currentCard.classList.remove("bs-callout-custom");
    currentCard.classList.add("bs-callout-success");
  }
}

function toggleSuccess() {
  var inputFields = document.querySelectorAll(".input-field");

  inputFields.forEach((item) => {
    item.addEventListener("focus", () => {
      var allActiveDivs = document.querySelectorAll(".bs-callout-custom");
      allActiveDivs.forEach((item) => {
        item.classList.remove("bs-callout-custom");
      });

      item.closest(".card").classList.remove("bs-callout-success");
      item.closest(".card").classList.add("bs-callout-custom");
    });
  });
}
