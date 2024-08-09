// let marks = [80,40,34,23,54];
// console.log(marks);

// marks[2] = 10;
// console.log(marks);

// for loop

let heroes = ["Spdiderman","Superman","Iroman","Antman"];

for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

// for of

for(let hero of heroes){
    console.log(hero);
}

let cities = ["isb","rwp","jhlm","gujrat","lhr"];

for(let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}

let marks = [85,97,44,37,76,60];

let sum = 0;

for(let val of marks){
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg number of class = ${avg}`);


let items = [250,645,300,900,50];

// let i = 0;

// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;

// }

for (i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);