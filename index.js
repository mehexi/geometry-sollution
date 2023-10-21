function calculateTringleArea() {
  const tringleBase = document.getElementById("triangle-base").value;
  const tringleHight = document.getElementById("triangle-hight").value;

  const tringleArea = 0.5 * tringleBase * tringleHight;

  console.log(tringleArea);
  addToCalculationEntry("tringle", tringleArea);
}

function calculateRectangleArea() {
  const rectangleWidth = document.getElementById("rectangle-width").value;
  const rectangleHeight = document.getElementById("rectangle-height").value;

  const rectangleArea = rectangleHeight * rectangleWidth;

  console.log(rectangleArea);
}

function calculateParallelogramArea() {
  const ParallelogramWidth = document.getElementById("Parallelogram-base")
    .value;
  const ParallelogramHeight = document.getElementById("Parallelogram-height")
    .value;

  const ParallelogramArea = ParallelogramWidth * ParallelogramHeight;

  console.log(ParallelogramArea);
}

function addToCalculationEntry(areaType, area) {
  const calculationCount = document.getElementById("calculation-entry");

  const count = calculationCount.childElementCount;

    const p = document.createElement("p");
    p.classList.add('flex', 'justify-between')

  p.innerHTML =  `<div> ${count +
    1}. ${areaType} ${area} cm<sup>2</sup></div> <button class="bg-blue-400 py-1 px-2 rounded text-white">
    Convert to m<sup>2</sup>
  </button>`;

  calculationCount.appendChild(p);
}
