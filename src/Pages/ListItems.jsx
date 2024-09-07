import React, { useState, useEffect } from 'react';

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Here you would typically fetch items from your backend
    // For now, we'll use dummy data
    const dummyItems = [
      { id: 1, name: 'T-Shirt', price: 19.99, description: 'Comfortable cotton t-shirt' },
      { id: 2, name: 'Jeans', price: 49.99, description: 'Classic blue jeans' },
      { id: 3, name: 'Sneakers', price: 79.99, description: 'Stylish and comfortable sneakers' },
    ];
    setItems(dummyItems);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Item List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItems;