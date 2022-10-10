let lname : string;
lname = "afdfksank";
let a = lname.toUpperCase();
console.log(a);

let numList : Array<number>
numList = [1,2,3,4,5,6,7,8,9]

let results = numList.filter((num) => num%2 == 0)
console.log(results)

let search = numList.find((num) => num === 8)
console.log(search)

let sum = numList.reduce((acc, num) => (acc + num)**2)
console.log(sum)

const enum color {
    Red,
    Green,
    blue
}

let c : color = color.blue
let sam = 8942

console.log(sam + " This is")