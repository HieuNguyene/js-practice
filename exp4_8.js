const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false }
];

var categoryStudent = students.reduce((acc,student)=>{
    // if(student.pass===true ){
    //     acc.pass.push(student);
    // }
    // else{
    // acc.fail.push(student);
    // }
    acc[student.pass? "pass":"fail"].push(student);
    return acc;
    
},{
    pass: [],
    fail: []
});

console.log(categoryStudent);