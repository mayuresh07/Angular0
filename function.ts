
const mul = function(a: number, b: number): number {
    return (a * b)
}
console.log(mul(9,78))

function add(a: number, b:number, ...c: number[]): number
{
    return a+b+c.reduce((a,b) => a + b)
}

let d = [1,2,3,4]
console.log(add(10, 20, ...d))

function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5])
console.log(concatResult)