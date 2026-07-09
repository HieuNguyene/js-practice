function isWeekend(date){
    return date.getDay()===0 || date.getDay()===6;
}
function countWeekendsInRange(startDate, endDate){
    let countWeekendDays = 0;
    const totalDays =(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    for(let i =1;i <totalDays;i++){
        const date =new Date(startDate);
        date.setDate(date.getDate()+i);
        if (isWeekend(date)) countWeekendDays++;
    }
    return countWeekendDays;
}

console.log(countWeekendsInRange(new Date(2026,4,12),new Date(2026,6,30)));