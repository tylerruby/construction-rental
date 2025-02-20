'use client'

import { useCart } from '@/components/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/categories" className="text-blue-500 hover:underline">Browse equipment</Link> to add items.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Daily Rate: ${item.dailyRate}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Clear Cart
            </button>
            <Link href="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4">
              Proceed to Checkout
            </Link>


          </div>
        </div>
      )}
    </div>
  )
} 