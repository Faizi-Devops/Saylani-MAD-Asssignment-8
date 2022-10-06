let count:number;
let nusy:number;
const Hello = (b:number[]) =>{
    for(let i :number=0;i<=100;i++){
        count=0;
        for(let j:number=0;j<=b.length-1;j++){
            nusy=b[j];
            if(nusy==i){
                count = count + 1;
                console.log(nusy)
            }
        }
        
        

    }
    




}
let a:number[]=[1,2,1,5,7,30,50,30,50,50,40];

Hello(a)