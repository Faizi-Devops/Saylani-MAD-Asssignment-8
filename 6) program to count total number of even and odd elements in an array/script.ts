let even:number=0;
let odd:number=0;
const Hello = (b:number[]) =>{
    for(let i:number=0;i<=b.length-1;i++){
        if(b[i]%2==0)
        {
            even = even +1;

        }
        else{
            odd = odd+1

        }
    }
    console.log(`The total number of even are ${even}`);
    console.log(`The total number of odd are ${odd}`)



}
let a:number[]=[1,2,3,4,5,6,7,8,9];
Hello(a)