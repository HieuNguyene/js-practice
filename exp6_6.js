const enrollDate = new Date(2024, 8, 5);

function predictGradute(date){
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear()+4);
    return newDate.getTime() - date.getTime();
}
console.log(predictGradute(enrollDate));