function sum(...numbers)
{
    let total =0;
    for(let number of numbers)
    {
        total+=number;
    }
    return total;
}
let a =sum(1,2,4,5);
console.log(a);