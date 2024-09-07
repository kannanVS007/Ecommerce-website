import React, { useState } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import { LogOut, Plus, CheckSquare, ShoppingBag, Upload } from 'lucide-react';

// MenuItem Component
const MenuItem = ({ icon, children, isActive, to }) => (
  <Link 
    to={to} 
    className={`px-4 py-2 mb-2 block rounded-md ${
      isActive 
        ? 'bg-pink-200 text-pink-500' 
        : 'bg-pink-100 text-gray-700 hover:bg-pink-200 hover:text-pink-500'
    }`}
  >
    <div className="flex items-center">
      {React.cloneElement(icon, { 
        size: 18, 
        className: isActive ? 'text-pink-500' : 'text-gray-500' 
      })}
      <span className="ml-2">{children}</span>
    </div>
  </Link>
);

// Updated AddItemComponent with image upload functionality
const AddItemComponent = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages].slice(0, 4));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Upload Image</h2>
      <div className="flex mb-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-24 h-24 border border-gray-300 flex items-center justify-center mr-2 relative">
            {images[i] ? (
              <img src={images[i]} alt={`Uploaded ${i + 1}`} className="w-full h-full object-cover" />
            ) : (
              <label className="cursor-pointer flex items-center justify-center w-full h-full">
                <Upload size={24} className="text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Product name</label>
        <input type="text" placeholder="Type here" className="w-full border border-gray-300 rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Product description</label>
        <textarea placeholder="Write content here" className="w-full border border-gray-300 rounded p-2" rows="4"></textarea>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block mb-2">Product category</label>
          <select className="border border-gray-300 rounded p-2">
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div className="mr-4">
          <label className="block mb-2">Sub category</label>
          <select className="border border-gray-300 rounded p-2">
            <option>Topwear</option>
            <option>Bottomwear</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Product Price</label>
          <input type="text" defaultValue="25" className="border border-gray-300 rounded p-2 w-20" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Product Sizes</label>
        <div className="flex">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} className="mr-2 px-3 py-1 bg-gray-100 rounded">{size}</div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Add to bestseller
        </label>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded">ADD</button>
    </div>
  );
};

// ListItemComponent
const ListItemComponent = () => (
  <div className="p-6">
    <h2 className="text-xl mb-4">All Products List</h2>
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left pb-2">Image</th>
          <th className="text-left pb-2">Name</th>
          <th className="text-left pb-2">Category</th>
          <th className="text-left pb-2">Price</th>
          <th className="text-left pb-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2">
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
              <ShoppingBag size={24} className="text-gray-400" />
            </div>
          </td>
          <td>Product Name</td>
          <td>Category</td>
          <td>$100</td>
          <td>
            <button className="text-blue-500">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

// OrderItem Component
const OrderItem = ({ product, customer, address, items, price, method, payment, date }) => (
  <div className="border border-gray-300 rounded-lg p-6 mb-4">
    <div className="flex items-start">
      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded mr-4">
        <ShoppingBag size={24} />
      </div>
      <div className="flex-1 flex justify-between">
        <div>
          <p className="font-medium">{product}</p>
          <p className="font-medium">{customer}</p>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className="text-right">
          <p><span className="font-medium">Items:</span> {items}</p>
          <p className="text-xl font-bold mb-2">${price}</p>
          <p><span className="font-medium">Method:</span> {method}</p>
          <p><span className="font-medium">Payment:</span> {payment}</p>
          <p><span className="font-medium">Date:</span> {date}</p>
        </div>
      </div>
    </div>
    <div className="flex justify-end mt-4">
      <select className="border border-gray-300 rounded px-3 py-2 w-48">
        <option>Order Placed</option>
        <option>Processing</option>
        <option>Shipped</option>
      </select>
    </div>
  </div>
);

// OrdersComponent
const OrdersComponent = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">Order Page</h2>
    <OrderItem 
      product="Boy Round Neck Pure Cotton T-shirt x 1 S"
      customer="Himanshu Akodiya"
      address="141, Adarsh Nagar 'b', Sawai Madhopur, Rajasthan, India, 322001"
      items={1}
      price={70}
      method="COD"
      payment="Pending"
      date="9/5/2024"
    />
    <OrderItem 
      product="Men Round Neck Pure Cotton T-shirt x 1 L"
      customer="Ankur Bera"
      address="1/144, DELHI, Delhi, India, 110091"
      items={1}
      price={74}
      method="COD"
      payment="Pending"
      date="9/5/2024"
    />
  </div>
);

// Main AdminPanel Component
const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    navigate(menu);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#ffebf5] border-r border-[#c586a5] p-4">
        <div className="mb-6 ml-5">
          <h1 className="text-xl font-bold">FOREVER<span className="text-pink-500">.</span></h1>
          <p className="text-xs text-pink-500">ADMIN PANEL</p>
        </div>
        <nav className="space-y-2">
          <MenuItem
            icon={<Plus />}
            isActive={activeMenu === 'addItems'}
            to="/admin/addItems"
            onClick={() => handleMenuClick('addItems')}
          >
            Add Items
          </MenuItem>
          <MenuItem
            icon={<CheckSquare />}
            isActive={activeMenu === 'listItems'}
            to="/admin/listItems"
            onClick={() => handleMenuClick('listItems')}
          >
            List Items
          </MenuItem>
          <MenuItem
            icon={<CheckSquare />}
            isActive={activeMenu === 'orders'}
            to="/admin/orders"
            onClick={() => handleMenuClick('orders')}
          >
            Orders
          </MenuItem>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-end items-center p-4 bg-gray-50">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md flex items-center">
            <LogOut size={18} className="mr-2" />
            Logout
          </button>
        </header>

        {/* Dynamic Page */}
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Routes>
            <Route path="addItems" element={<AddItemComponent />} />
            <Route path="listItems" element={<ListItemComponent />} />
            <Route path="orders" element={<OrdersComponent />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;