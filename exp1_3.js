const point = [10, 20,30];

const [x, y, z] = point;

let distance = (x,y)=> Math.sqrt(x*x + y*y);
console.log(`Khoang cach tinh tu goc toa do: ${distance(x, y)}`);