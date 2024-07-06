const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-btn");

const createDiv = (numberOfDivsToCreate) => {
  numberOfDivsToCreate = prompt("Enter the number of squares per side");

  const divWidth = 600 / numberOfDivsToCreate;
  const divHeight = (divWidth / 600) * 100;

  for (let i = 0; i < numberOfDivsToCreate * numberOfDivsToCreate; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("item");

    divEl.style.setProperty("flex", `${divHeight}%`);
    divEl.style.setProperty("height", `${divHeight}%`);
    container.appendChild(divEl);
  }
};

resetButton.addEventListener("click", () => {
  container.innerHTML = "";
  createDiv();
});
