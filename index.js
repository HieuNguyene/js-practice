const students = [
    {name:"Hieu",score:8},
    {name:"Lan",score:9},
    {name:"Minh",score:5}
]

const names = students.map(student=>student.name)

console.log(names)

const passed = students.filter(
    student=>student.score>=8
)

console.log(passed)

const average = students.reduce(
    (sum,student)=>sum+student.score,
    0
)/students.length

console.log(`Điểm trung bình: ${average}`)