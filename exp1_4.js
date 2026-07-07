const user = {
    id: 1,
    info: {username: "an123", address:{city:"Hà Nội", district:"Cầu Giấy"}}
}

const {info:{address:{city: myCity,district: myDistrict}}}=user;

console.log(`Đia chỉ: ${myDistrict},${myCity}`);

