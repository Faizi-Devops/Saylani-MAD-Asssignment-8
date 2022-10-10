let count:number;
let num:number;
let c:number[]=[1,2,3,4,5,6,7,8,9];
const Hello = (b:number[]) =>{
    for(let i:number=0;i<=c.length-1;i++){
        count=0;
        for(let j:number=0;j<=b.length-1;j++){
            if(c[i]==b[j]){
                count = count+1;
                num=c[i]

            }
        }
        console.log(`${num} has ${count} times`)
        
    }




}
let a:number[]=[1,2,5,8,3,8,3,5,7,3,6,8,3,5,7,1];
Hello(a);