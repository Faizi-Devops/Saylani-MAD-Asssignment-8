const Hello = (b:number[]) =>{
    let c:number[]=b.sort((a,b)=>{return a-b});
    console.log(c);

    let d:number[]=b.sort((a,b)=>{return b-a})
    console.log(d)





}
let a:number[]=[1,6,8,3,5,0,3];
Hello(a);