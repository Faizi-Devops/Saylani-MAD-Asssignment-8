let maximum:number;
let minimum:number;
const Hello = (b:number[]) =>{
    maximum=b[0];
    minimum=b[0];
    for(let i:number=0;i<=b.length-1;i++){
        if(b[i]>maximum){
            maximum=b[i]
        }
        
        else if(b[i]<minimum){
            minimum=b[i]

        }
        else{
            maximum=b[0];
            minimum=b[0];
        }
    }
    console.log(`The maximum number is ${maximum}`);
    console.log(`The minimum number is ${minimum}`);

    






}
let a:number[]=[-1,40,60,90,70,500];
Hello(a);