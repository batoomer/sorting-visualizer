export default function insertionSort(data){
    // Variable to store the animations
    let animations = [];

    for (let i = 1; i<data.length; i++){
        let j = i;
        while (j>0){
            
            if (data[j-1] >= data[j]){
                animations.push([j,j-1]);
                let temp = data[j];
                data[j] = data[j-1];
                data[j-1] = temp;

            };

            j--;
        };
    }
    return animations;
};