export default function bubbleSort(data){
    // Variable to store the animations
    let animations = [];

    for (let i = 0; i < data.length; i++){
        for(let j=0; j< data.length; j++){
            if (data[j] > data[j+1]){
                animations.push([j,j+1]);
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            };
        };
    };
    return animations;
};