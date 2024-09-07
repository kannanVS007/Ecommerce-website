// import React, { useState, useEffect } from 'react';

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Here you would typically fetch orders from your backend
//     // For now, we'll use dummy data
//     const dummyOrders = [
//       { id: 1, customer: 'John Doe', total: 89.97, status: 'Pending' },
//       { id: 2, customer: 'Jane Smith', total: 129.98, status: 'Shipped' },
//       { id: 3, customer: 'Bob Johnson', total: 59.99, status: 'Delivered' },
//     ];
//     setOrders(dummyOrders);
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Order Management</h2>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Order ID</th>
//             <th className="py-2 px-4 border-b">Customer</th>
//             <th className="py-2 px-4 border-b">Total</th>
//             <th className="py-2 px-4 border-b">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td className="py-2 px-4 border-b">{order.id}</td>
//               <td className="py-2 px-4 border-b">{order.customer}</td>
//               <td className="py-2 px-4 border-b">${order.total.toFixed(2)}</td>
//               <td className="py-2 px-4 border-b">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminOrders;