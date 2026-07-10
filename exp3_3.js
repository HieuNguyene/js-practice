function getUserPromise(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id > 0) resolve({name:"User"+id});
            else reject("ID invalid");
        },1000);
    });
}
    
async function getUser(id){
    try{
        const user = await getUserPromise(id);
        console.log(user);
    }catch(error){
        console.log(error);
    }
}
getUser(4);