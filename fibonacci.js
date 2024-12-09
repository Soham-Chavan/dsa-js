let num1 = 0;
let num2 = 1;

let fibonacci_Series = []

fibonacci_Series.push(num1)
fibonacci_Series.push(num2)

console.log(fibonacci_Series)

for (let i = 2; i < 10; i++) {  // Start at index 2
    fibonacci_Series[i] = fibonacci_Series[i-1] + fibonacci_Series[i-2];
}

for (let index = 0; index < fibonacci_Series.length; index++) {  // Start from 0
    console.log(fibonacci_Series[index]);
}
