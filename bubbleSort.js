// bubble sort
const numbers = [99,43,5,1,2,5,63,87,283,4,0];

function bubbleSort(array){
    const length = array.length;
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            // if left hand side is larger than right hand side , [j+1] denotes 1 to the right
            if (array[j] > array[j+1]){
                //swap numbers
                let temp = array[j];
                // right equal to left
                array[j] = array[j+1];
                //  left equal to right
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);