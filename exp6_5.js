function diffInDays(date1, date2) {
    return Math.abs(date2.getTime() - date1.getTime());
}

console.log(diffInDays(new Date(2005,4,12),new Date()));