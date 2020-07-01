var numbers = new Array(58);
numbers[0] = 0;
numbers[1] = 1;

for(let i=2; i<numbers.length; i++){
    numbers[i] = (i-1) + (i-2)
}
console.log(numbers);