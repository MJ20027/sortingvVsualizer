function disableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    
}

function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#RSize").disabled = true;
}

function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#RSize").disabled = false;
}

function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}


function waitforme(time) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, time);
    })
}



let arraySize = document.querySelector('#RSize');


arraySize.addEventListener('input', function () {
    createNewArray(parseInt(arraySize.value));
});

let delay = 300;


document.querySelector('#RSpeed').addEventListener('input', function () {
    delay = 300 - parseInt(document.querySelector('#RSpeed').value);
});

createNewArray();

function createNewArray(noOfBars = 30) {
    deleteChild();

    let array = [];

    const bars = document.querySelector("#bars");
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 500));
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
    createNewArray(arraySize.value);
});
