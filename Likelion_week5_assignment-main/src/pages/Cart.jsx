import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-indigo-300 opacity-30 rounded-full blur-2xl bottom-[-80px] right-[-60px]" />
      </div>

      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white shadow p-4 rounded flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <span className="text-indigo-600 font-semibold">{item.price.toLocaleString()}원</span>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-xl mt-6">
            Total: {totalPrice.toLocaleString()}원
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
