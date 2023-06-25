//TODO: Given the number 'n' find the first 'n' elements of the Fibonacci sequence
function fibonacciSequence(n){
    const sequence = [0,1];
    for(let i = 2;i <= n; i++){
        var nextNumber = sequence[i-1]+sequence[i-2];
        sequence.push(nextNumber);
    }
    return sequence;
}
//* Big-O is O(n)

//TODO: Given an integer 'n',find the factorial of that integer
function factorial(n){
    let result = 1;
    for(let i = 1;i<=n;i++){
        result *= i;
    }
    return result;
}
//* Big-O is O(n)

//TODO: Given the natural number 'n', determine if the number is prime or not
function isPrimeNumber(n){
    if(n <= 2) return false

    let counteer = 0;
    for(let i = 1;i <= n;i++){
        if(n % i === 0) counteer++;
    }

    if(counteer == 2){
        return true;
    }
    return false;
}
//* Big-O is O(n)

//! Other stuff
function isPrimeNumber2(n){
    if(n < 2) return false;

    for(let i = 2;i <= Math.sqrt(n);i++){
        if(n % i === 0) return false;
    }
    return true;
}
//* Big-O is O(sqrt(n))

//TODO: Given a positive integer 'n', determine the number is a power of 2 or not
function isPowerOfTwo(n){
    for(let i = 0;i <= n;i++){
        if(2**i === n) return true;
    }
    return false;
}
//* Big-O is O(n)

//! Other stuff
function isPowerOfTwo2(n) { 
    if(n < 1)return false;
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n /= 2;
    }
    return true;
 }
 //* Big-O is O(log(n))

 //! Best way
 function isPowerOfTwoBitwise(n) { 
    if(n < 1)return false;
    return (n & (n-1)) === 0;
 }
 //* Big-O is O(n)

 //TODO: Fibonacci sequence with recursion
 const fibonacciRecursion = (n) => {
    if(n < 2) return n;
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
 }
//* Big-O is O(n)

//TODO: Find the factorial with recursion
const factorialRecursion = (n) =>{
    if(n < 2) return 1;
    return n * factorialRecursion(n - 1);
}
//* Big-O is O(n)