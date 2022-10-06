let even:number[]=[];
let odd:number[]=[];
const Hello = (b:number[]):number[] =>{
    let c:number[]=b.sort((a,b)=>{return a-b});
    for(let i:number=0;i<=c.length-1;i++){
        if(c[i]%2==0){
            even.push(c[i]);

        }
        else{
            odd.push(c[i])

        }

    }
    let newArray:number[]=even.concat(odd);
    return newArray
    





}
let a:number[]=[1,4,6,9,3,2,5,50,7,10];
console.log( Hello(a));