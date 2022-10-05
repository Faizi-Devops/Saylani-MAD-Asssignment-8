let newArray:number[]=[];
const Hello = (b:number[]) =>{
    for(let i:number=b.length-1;i>=0;i--){
        newArray.push(b[i])


    }
    console.log(`The elements of the arrays before are ${b}`);
    console.log(`The elements of the array after are ${newArray}`)



}
let a:number[]=[1,2,3,4,5];
Hello(a);