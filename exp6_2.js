var birth =new Date(2004, 4, 15); // ví dụ 15/05/2004
const day = String(birth.getDate()).padStart(2,'0');
const month = String(birth.getMonth()+1).padStart(2,'0');
const year = String(birth.getFullYear()).padStart(4,'0');
console.log(`${day}/${month}/${year}`);
