const matrix =[[1,2],[3,4],[5,6]];
function merge(arr){
    let result =[];
    for (const items of arr)
    {
        if(Array.isArray(items))
        {
            result= [...result,...items];
        }
        else{
            result.push(items);

        }
    }
    return result;
}
console.log(merge(matrix));
 