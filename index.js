function calculateTringleArea() {
  const tringleBase = document.getElementById("triangle-base").value;
  const tringleHight = document.getElementById("triangle-hight").value;

  const tringleArea = 0.5 * tringleBase * tringleHight;

  addToCalculationEntry("tringle", tringleArea);
}

function calculateRectangleArea() {
  const rectangleWidth = document.getElementById("rectangle-width").value;
  const rectangleHeight = document.getElementById("rectangle-height").value;

  const rectangleArea = rectangleHeight * rectangleWidth;

  addToCalculationEntry("rectangle", rectangleArea);
}

function calculateParallelogramArea() {
  const ParallelogramWidth = document.getElementById("Parallelogram-base")
    .value;
  const ParallelogramHeight = document.getElementById("Parallelogram-height")
    .value;

  const ParallelogramArea = ParallelogramWidth * ParallelogramHeight;

  addToCalculationEntry("parallelogram", ParallelogramArea);
}

function calculateRhombusArea() {
  const rhombusWidth = document.getElementById("rhombus-width").value;
  const rhombusHeight = document.getElementById("rhombus-height").value;

  const rhombusArea = 0.5 * rhombusHeight * rhombusWidth;
  addToCalculationEntry("Rhombus", rhombusArea);
}

function calculatePentagonArea() {
  const PentagonWidth = document.getElementById("pentagon-width").value;
  const PentagonHeight = document.getElementById("pentagon-height").value;

  const PentagonArea = 0.5 * PentagonHeight * PentagonWidth;
  addToCalculationEntry("Pentagon", PentagonArea);
}

function calculateEllipseArea() {
  const ellipseWidth = document.getElementById("ellipse-width").value;
  const ellipseHeight = document.getElementById("ellipse-height").value;

  const ellipseArea = (Math.PI * ellipseHeight * ellipseWidth).toFixed(4);

  addToCalculationEntry("Ellipse", ellipseArea);
}

function addToCalculationEntry(areaType, area) {
  const calculationCount = document.getElementById("calculation-entry");

  const count = calculationCount.childElementCount;

  const p = document.createElement("p");
  p.classList.add("flex", "justify-between");

  p.innerHTML = `<div>  ${count +
    1}. ${areaType} <span class="area-value"> ${area} cm</span><sup>2</sup></div> <button class="convert-btn bg-[#1090D8] py-1 px-2 rounded text-white">
    Convert to m<sup>2</sup>
  </button>`;

  const convertButton = p.querySelector(".convert-btn");

  convertButton.addEventListener("click", function() {
    const currentAreaSpan = p.querySelector(".area-value");

    const currentArea = parseFloat(currentAreaSpan.innerText);

    const convertedArea = (currentArea * 0.0001).toFixed(4);

    currentAreaSpan.innerText = `${convertedArea} m`;
  });

  calculationCount.appendChild(p);
}
