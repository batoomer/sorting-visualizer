export default function quickSort(data){
    let animation = [];

    __quickSort(data, 0, data.length - 1, animation)

    console.log(animation)
    console.log(data)
    return animation
}

const __quickSort = (data, left, right, animation) => {
    if (left < right){
        let p = __hoare_partition(data, left, right, animation)
        __quickSort(data, left, p, animation);
        __quickSort(data, p+1, right, animation);
    };
};



const __hoare_partition = (data, left, right, animation) => {
    let p_idx = Math.floor((right+left)/2);
    let pivot = data[p_idx];

    let l_idx = left - 1;
    let r_idx = right + 1;

    while (true) {
        
        l_idx++;
        while (data[l_idx] < pivot){
            l_idx++;
        };

        r_idx--;
        while(data[r_idx] > pivot){
            r_idx--;
        };

        if (l_idx >= r_idx){
            return r_idx
        };

        animation.push([l_idx, r_idx]);
        let temp = data[l_idx];
        data[l_idx] = data[r_idx];
        data[r_idx] = temp;
    };
}