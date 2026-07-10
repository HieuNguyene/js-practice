//Viết hàm fetchWeather(city) trả về Promise, delay ngẫu nhiên, có 20% khả năng bị lỗi. Dùng async/await với try/catch để gọi hàm cho danh sách nhiều thành phố (dùng Promise.allSettled() để xử lý cả trường hợp lỗi). In ra kết quả tổng hợp kèm thời gian gọi.

function fetchWeather(city){
    const success = Math.random();
    const delay = Math.floor(Math.random()*2000)+1000; 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(success < 20){
            reject("Đã xảy ra lỗi");
        }
        else{
            resolve(city);
        }
        }, delay);
    })
}
const cities = [
    "Ha Noi",
    "Da Nang",
    "Ho Chi Minh",
    "Hai Phong",
    "Can Tho"
];
async function getWeather() {

    const start = Date.now();

    const results = await Promise.allSettled(
        cities.map(city => fetchWeather(city))
    );

    const end = Date.now();

    console.log(results);

    console.log(`Time: ${end - start} ms`);
}

getWeather();