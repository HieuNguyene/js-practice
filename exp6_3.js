function formatDate(date){
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2,'0');
    const year = String(date.getFullYear()).padStart(4,'0')
    return `${day}/${month}/${year}`;
}
console.log(formatDate(new Date(2005,4,12)));