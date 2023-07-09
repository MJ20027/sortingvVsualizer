async function selection(){
    function swap(el1, el2) {
        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
    }
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                ele[j].style.background = 'cyan';
            }   
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = 'cyan';
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    document.getElementById("ss").className = "btn btn-outline-warning selectionSort m-1";
    document.getElementById("head").innerHTML= "Sorting Visualizer - Selection Sort";
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    document.getElementById("ss").className = "btn btn-outline-danger selectionSort m-1";
    document.getElementById("head").innerHTML= "Sorting Visualizer";
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});