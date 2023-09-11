const buttons = document.querySelectorAll(".questions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const arrowIcon = button.querySelector("img");
    arrowIcon.classList.toggle("invert-arrow");

    const answer = button.nextElementSibling; 

    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        const otherAnswer = otherButton.nextElementSibling;
        otherAnswer.style.display = "none";
        const otherArrowIcon = otherButton.querySelector("img");
        otherArrowIcon.classList.remove("invert-arrow");
      }
    });

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});