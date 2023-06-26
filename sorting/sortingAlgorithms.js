//TODO: Given an array of integers,sort the array 
const array = [8,20,-2,4,6]

//? Bubble sort
const bubbleSort = (arr) =>{
    let swapped;
    do{
        swapped = false;
        for(let i = 0;i < arr.length - 1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
    return arr;
}
//* Time complexity is O(n^2)

//? Insertion sort
const insertionSort = (arr) =>{
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;  
        
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]
            j--;
        }

        arr[j + 1] = numberToInsert;
    }
    return arr;
}
//* Time complexity is O(n^2)

//? Quick sort
const quickSort = (arr) =>{
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = []
    let right = []
    
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
//* Big O complexity O(n^2)
//* This algorithm is popular because average case complexity is O(nlog(n))



//? Merge sort
const mergeSort = (arr) => {
    if(arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

//! Helper method merge()
const merge = (leftArr,rightArr) => {
    const result = [];
    while (leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]){
            result.push(leftArr.shift())
        }else{
            result.push(rightArr.shift())
        }
    }
    return [...result,...leftArr,...rightArr]
}

//* Time complexity (Big O) is O(nlog(n)) 