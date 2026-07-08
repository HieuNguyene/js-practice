// function getUser(id,callback){
//     setTimeout(()=>{
//         if(id > 0) callback(null,{id,name:"User"+id});
//         else callback("ID invalid");
//     },1000);
// }

function getUserPromise(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id > 0) resolve({name:"User"+id});
            else reject("ID invalid");
        },1000);
    });
}
getUserPromise(5)
    .then((User)=>{
        console.log(User);
    })
    .catch(error =>{
        console.log(error);
    })