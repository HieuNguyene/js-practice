class Time  {
    constructor(){
        this.count_second= 0;
    }
    count(){
        setInterval(()=>{
            console.log(this.count_second);
            this.count_second++;
        },1000);
    }
}
const a = new Time();
a.count();
