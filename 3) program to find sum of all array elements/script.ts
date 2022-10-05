let addition:number=0;
const Hello = (b:number[]) =>{
    for(let i:number=0;i<=b.length-1;i++){
        addition = addition + b[i];

    }
    console.log(`The sum of all numbers are ${addition}`)




}
let a:number[]=[1,2,3,4,5];
Hello(a);