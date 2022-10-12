const Hello = (b:number[],d:number) =>{
    for(let i:number=0;i<=b.length-1;i++){
        if(d==b[i]){
            let index:number=b.indexOf(b[i]);
            console.log(`${b[i]} is at the ${index} position`)
        }
    }
    







}
let a:number[]=[1,2,3,4,5,6,7,8,9];
let c:number=5;
Hello(a,c);