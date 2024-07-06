const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-btn");
const eraseButton = document.querySelector(".erase-btn");

// Creates div element based on input from user
const createDiv = (numberOfDivsToCreate) => {
  numberOfDivsToCreate = prompt("Enter the number of squares per side");

  const divWidth = 600 / numberOfDivsToCreate;
  const divHeight = (divWidth / 600) * 100;

  if (numberOfDivsToCreate > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    for (let i = 0; i < numberOfDivsToCreate * numberOfDivsToCreate; i++) {
      const divEl = document.createElement("div");
      divEl.classList.add("item");

      divEl.style.setProperty("flex", `${divHeight}%`);
      divEl.style.setProperty("height", `${divHeight}%`);
      let opacity = 0.1;

      divEl.addEventListener("mouseenter", () => {
        if (opacity < 1) {
          opacity += 0.1;

          divEl.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
        }
      });

      container.appendChild(divEl);
    }
  }
};

// Start a new grid
resetButton.addEventListener("click", () => {
  container.innerHTML = "";
  createDiv();
});
