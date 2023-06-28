//TODO: Given two finite non-empty sets,find their cartesian product
//TODO: Example: A=[1,2] B=[3,4,5]; AxB = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]

const cartesianProduct = (leftArr,rightArr) =>{
    const result = []
    for(let i = 0; i < leftArr.length; i++){
        for (let j = 0; j < rightArr.length; j++) {
            result.push([leftArr[i],rightArr[j]])
        }
    }
    return result;
}
//* Big-O O(n*m)


//TODO: Given a staircase of 'n' steps,count the number of distinct way to climp to the top.You can either climp 1 step or 2 steps at a time.
//TODO: n=1 => (1); n=2 => (1,1) (2); n=4 =>(1,1,1,1) (1,2,1) (2,1,1) (1,1,2) (2,2)

const climbingStairs = (n) =>{
    if(n < 2) return 1;
    return climbingStairs(n-1) + climbingStairs(n-2);
}
//* Time complexity is O(2^n)


//? Other stuff
const climbingStairsBestWay = (n) =>{
    const noOfWays = [1,2]
    for (let i = 2; i <= n ; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n-1]
}
//* Time complextiy is O(n)