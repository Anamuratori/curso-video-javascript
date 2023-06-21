let num = [5, 8, 2, 9, 3]

// console.log(`O vetor tem ${num.length} posições.`);
// console.log(`O primeiro valor do vetor é ${num[0]}`);
//console.log(num);

num.sort()
console.log(num);

for (var n in num) {   
    console.log(`A posição número ${parseInt(n)+1} tem o valor ${num[n]}`);
}

// num.push(1)
//num[3]=6
//num[2]=6

console.log(num.indexOf(7));
console.log(num.indexOf(5));
