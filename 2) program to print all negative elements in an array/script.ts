const Hello = (b:number[]) =>{
    for(let i:number=0;i<=b.length-1;i++){
        let c:number=b[i];
        if(c<0)
        {
            let d:number=c;
            console.log(d)

        }
        
    }




}
let a:number[]=[1,2,3,4,-5,-96,56,-90,-60];
Hello(a)