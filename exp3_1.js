function sayHello(callback){
    setTimeout(()=>{
        callback();
    },2000);
}
sayHello(()=>{
    console.log("Hello");
});