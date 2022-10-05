let count:number=0;
const Hello = (b:number[]) =>{
    for(let i:number=0;i<=b.length-1;i++){
        if(b[i]<0){
            count = count+1


        }
    }
    console.log(`The total negative number of arrays are ${count}`)




}
let a:number[]=[-1,-2,-4,5,6,-7,8,40,-50,-60,-20];
Hello(a);