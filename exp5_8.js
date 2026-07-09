function slugify(title){
    return title.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D").replace('\w\s',' ').split(' ').join('-');
}
console.log(slugify('Học Lập Trình JavaScript'));