const products = [
    {
        name: "iPhone 16 Pro",
        price: 32000000,
        category: "Phone"
    },
    {
        name: "iPhone 16 Pro",
        price: 28000000,
        category: "Phone"
    },
    {
        name: "MacBook Air M4",
        price: 34000000,
        category: "Laptop"
    },
    {
        name: "iPhone 16 Pro",
        price: 42000000,
        category: "Laptop"
    },
    {
        name: "iPhone 16 Pro",
        price: 2500000,
        category: "Accessory"
    },
    {
        name: "iPhone 16 Pro",
        price: 3200000,
        category: "Accessory"
    },
    {
        name: "Sony WH-1000XM5",
        price: 8500000,
        category: "Headphone"
    },
    {
        name: "iPhone 16 Pro",
        price: 6200000,
        category: "Headphone"
    },
    {
        name: "iPad Air M3",
        price: 18000000,
        category: "Tablet"
    },
    {
        name: "Xiaomi Pad 7",
        price: 9500000,
        category: "Tablet"
    }
];

function searchProducts(products,keyword){
    const filterProduct = products.filter(p => p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
    return [...filterProduct].sort((a,b)=>a.price - b.price);
}

console.log(searchProducts(products,'iPhone 16 Pro'));