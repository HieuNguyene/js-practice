function margeObject(...object){
    let result ={};
    for(let obj of object)
    {
        result={
            ...result,
            ...obj
        }
    }
    return result;
}

console.log(margeObject({name:"hieu"},{age:20}));

