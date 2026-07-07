const obj ={
    value: 42,
    normaFn : function(){
        console.log(this.value);
    },
    arrowFn : ()=>{
        console.log(this.value);
    }
}
obj.normaFn();// giá trị sẽ là 42 bởi vì lúc này this chính là obj
obj.arrowFn();// giá trị là undefined bởi vì trong ArrowFn ko tự tạo ra this mà sẽ kế thừa this từ bên ngoài nơi mà nó được định nghĩa