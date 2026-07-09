const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false }
];

//loc sinh vien dat,lay so diem,tinh tong diem
var studentPass = students.filter((student)=>{
    return student.pass === true;
});

var studentPassScores = studentPass.map((student)=>{
    return student.score;
});

var studentPassScoresTotal = studentPassScores.reduce((acc,score)=>{
    return acc + score;
},0)
console.log(studentPass);
console.log(studentPassScores);
console.log(studentPassScoresTotal);