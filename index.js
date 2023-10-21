function calculateTringleArea() {
    const tringleBase = document.getElementById('triangle-base').value
    const tringleHight = document.getElementById('triangle-hight').value

    const tringleArea = 0.5 * tringleBase * tringleHight

    console.log(tringleArea)
}

function calculateRectangleArea() {
    const rectangleWidth = document.getElementById('rectangle-width').value
    const rectangleHeight = document.getElementById('rectangle-height').value

    const rectangleArea = rectangleHeight * rectangleWidth

    console.log(rectangleArea)
}

function calculateParallelogramArea() {
    const ParallelogramWidth = document.getElementById('Parallelogram-base').value
    const ParallelogramHeight = document.getElementById('Parallelogram-height').value

    const ParallelogramArea = ParallelogramWidth * ParallelogramHeight

    console.log(ParallelogramArea)
}

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}
    