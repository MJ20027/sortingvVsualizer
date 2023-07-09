async function insertion(){
    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){

        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'red';

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
  
            ele[j].style.background = 'red';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green'; 
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    document.getElementById("is").className = "btn btn-outline-warning insertionSort m-1";
    document.getElementById("head").innerHTML= "Sorting Visualizer - Insertion Sort";

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    document.getElementById("is").className = "btn btn-outline-danger insertionSort m-1";
    document.getElementById("head").innerHTML= "Sorting Visualizer";
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


