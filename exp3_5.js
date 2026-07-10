function fetchData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random() >= 0.5;
            if (success) resolve(`Success get data from ${url}`);
            else reject(`Data cannot get from ${url}`);
        },1000);
        
    });
};


async function fetchWithRetry(url,retries){
    while(retries >0){
        try{
            const result = await fetchData(url);
            return result;
        }catch(error){
            retries--;
            console.log(`Con ${retries} lan thu lai`)
        }
    }
    throw new Error("Da thu het lan");
}

(async () => {
    try {
        const data = await fetchWithRetry(
            "https://api.example.com/users",
            3
        );

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
})();