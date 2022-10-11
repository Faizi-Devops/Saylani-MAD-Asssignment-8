const Hello = (b:number[]) =>{
    let c:number[]=b.sort((a,b)=>{return a-b});
    let d:number=b[c.length-2];
    console.log(d)




}
let a:number[]=[1,2,5,60,70,20,43,80,90];
Hello(a);