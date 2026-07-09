function addDays(date,days){
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate()+days);
    return newDate;
}

console.log(addDays(new Date(),5));