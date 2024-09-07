// import React, { useState } from 'react';

// const AddItems = () => {
//   const [itemName, setItemName] = useState('');
//   const [itemPrice, setItemPrice] = useState('');
//   const [itemDescription, setItemDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send this data to your backend
//     console.log('Submitting new item:', { itemName, itemPrice, itemDescription });
//     // Reset form after submission
//     setItemName('');
//     setItemPrice('');
//     setItemDescription('');
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="itemName" className="block mb-1">Item Name</label>
//           <input
//             type="text"
//             id="itemName"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="itemPrice" className="block mb-1">Price</label>
//           <input
//             type="number"
//             id="itemPrice"
//             value={itemPrice}
//             onChange={(e) => setItemPrice(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="itemDescription" className="block mb-1">Description</label>
//           <textarea
//             id="itemDescription"
//             value={itemDescription}
//             onChange={(e) => setItemDescription(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//           Add Item
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItems;