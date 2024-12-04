//Iterative
function fib(n){
    let n0 = 0;
    let n1 = 1;
    let arr = [];

    for(let i = 0; i < n; i++){
        arr.push(n0);
        let temp = n1;
        n1 = n1 + n0;
        n0 = temp;
    }
    return arr;
}

//Recursive
function fibonacciSequence(n) {
    // Base case: handle invalid input
    if (n <= 0) return [];
    
    // Helper function to generate Fibonacci sequence recursively
    function generateFibonacci(count) {
        // Base cases
        if (count === 1) return [0];
        if (count === 2) return [0, 1];
        
        // Recursive case
        const sequence = generateFibonacci(count - 1);
        const nextFibonacci = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextFibonacci);
        
        return sequence;
    }
    
    return generateFibonacci(n);
}

// Example usage
console.log(fibonacciSequence(1)); // [0]
console.log(fibonacciSequence(5)); // [0, 1, 1, 2, 3]
console.log(fibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13]