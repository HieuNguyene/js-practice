const ids = [1, 2, 3, 4, 5];

function getProductionById(id){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    id:id,
                    name: `product ${id}`
                })
            },1000);
        });
};

async function fetchData() {
    const products = [];
    for (const id of ids){
        const product = await getProductionById(id);
        products.push(product);
    }
    return products;
}

(async () => {
    const products = await fetchData();
    console.log(products);
})();

