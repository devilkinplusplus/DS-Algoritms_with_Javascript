//? Linear search
//TODO: Given an array of 'n' elements and a target element 't',find the index of 't' in the array.Return -1 if the target element is not found
//TODO: Example output: arr = [-5,2,10,4,6],t=10; should return 2;
const linearSearch = (arr,target) => {
    for(let i = 0;i <= arr.length;i++){
        if(target === arr[i]){
            return i;
        }
    }
    return -1
}
//* Time complexity is O(n) (Big O)


//? Binary Search
//? Binary search only works on a sorted array!
//TODO: Given a sorted array of 'n' elements and a target element 't',find the index of 't' in the array.Return -1 if the target is not found
const binarySearch = (arr,target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[middleIndex] === target){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}
//* Time complexity is O(log(n))

//? Recursive binary search
//TODO: Given a sorted array of 'n' elements and a target element 't',find the index of 't' in the array.Return -1 if the target is not found
const binarySearchRecursively = (arr,target) =>{
   return search(arr,target,0,arr.length - 1);
}

//? Helper method search()
const search = (arr,target,leftIndex,rightIndex) => {
    if(leftIndex > rightIndex) return -1;
    
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target === arr[middleIndex]) return middleIndex;
     
    if(target < arr[middleIndex]) return search(arr,target,leftIndex,middleIndex - 1)
    else return search(arr,target,middleIndex + 1,rightIndex);
}

//* Time complexity is O(log(n))