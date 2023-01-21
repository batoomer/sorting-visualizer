export default function selectionSort(data){
    let animation = [];

    for (let i=0; i< data.length-1; i++){
        
        let minIndex = i;
        
        for (let j=i+1; j< data.length; j++){
            if (data[j] < data[minIndex]){
                minIndex = j;
            };
        };

        if (minIndex != i){
            animation.push([i, minIndex]);
            let temp = data[i];
            data[i] = data[minIndex];
            data[minIndex] = temp;
        };
    };

    return animation
}