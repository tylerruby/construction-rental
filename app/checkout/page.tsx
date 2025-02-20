'use client'

import { useCart } from '@/components/CartContext'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const { data: session } = useSession()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  useEffect(() => {
    if (session) {
      setName(session.user.name || '')
      setEmail(session.user.email || '')
    }
  }, [session])

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!name || !email) {
      alert('Please fill out all fields.')
      return
    }

    try {
      // Simulate saving rental data to a backend
      const response = await fetch('/api/rentals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod,
          rentals: cart,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save rental data')
      }

      alert('Checkout successful!')
      clearCart()
    } catch (error) {
      console.error(error)
      alert('There was an error processing your checkout.')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/categories" className="text-blue-500 hover:underline">Browse equipment</Link> to add items.</p>
      ) : (
        <div>
          <ul className="space-y-4 mb-8">
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Daily Rate: ${item.dailyRate}</p>
                    <p className="text-gray-600">Rental Period: {item.startDate} to {item.endDate}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <form onSubmit={handleCheckout} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Select Payment Method</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Complete Checkout
            </button>
          </form>
        </div>
      )}
    </div>
  )
} 