function renderStudentCard({name, score, major}){
    return `<div>Sinh vien: ${name} - Nganh: ${major} - Diem:${score} <div>`;
}

console.log(renderStudentCard({name:'Nguyen Minh Hieu',major:'Cong nghe thong tin',score:10}));