const orders = [
  { id: 1, customer: "An", total: 250000, date: "2026-06-01", status: "completed" },
  { id: 2, customer: "Bình", total: 120000, date: "2026-06-15", status: "cancelled" },
  { id: 3, customer: "Chi", total: 500000, date: "2026-07-02", status: "completed" },
  { id: 4, customer: "An", total: 75000, date: "2026-07-05", status: "completed" }
];

//1 Dùng filter() + reduce() để tính tổng doanh thu của các đơn hàng "completed".
const totalRevenueOfCompleteOrder = orders.filter((order)=>{return order.status ==='completed'}).reduce((acc,orders)=>{return acc + orders.total},0);
//console.log(totalRevenueOfCompleteOrder);

// 2. Dùng map() + Template String để tạo danh sách chuỗi hiển thị dạng "Đơn #1 - An - 250,000đ - 01/06/2026".
const formatOrders = orders.map((order)=>{return `Đơn #${order.id} - ${order.customer} - ${order.total} - ${order.date}`});
//console.log(formatOrders);

//3 Dùng reduce() để nhóm đơn hàng theo customer.
const mergeOrdersByCustomer = orders.reduce((result,order)=>{
    const key = order.customer;
    if (!result[key]){
        result[key] =[];
    } 
    result[key].push(order);

    return result;
},{})

//console.log(mergeOrdersByCustomer);

//4. Viết một hàm bất đồng bộ processOrder(order) (giả lập xử lý mất 1 giây), 
// dùng async/await với for...of để xử lý tuần tự tất cả đơn hàng "completed" và in log tiến trình
function processOrder(order){
    console.log(`Bat dau xu ly don hang ${order.id}`);
    return new Promise((resolve)=>{
            setTimeout(()=>{
            console.log(`Đã xử lí xong đơn hàng ${order.id}`);
            resolve(order);
    },1000);
    });
}

async function processCompleteOrders(){
    for( const order of orders){
        if (order.status ==='completed'){
            await processOrder(order);
        }
    }
    console.log("Đã xử lí hết đơn hàng !");
}

processCompleteOrders();


