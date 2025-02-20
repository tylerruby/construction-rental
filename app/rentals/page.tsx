'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Rental {
  id: string
  name: string
  startDate: string
  endDate: string
}

export default function MyRentalsPage() {
  const { data: session, status } = useSession()
  const [rentals, setRentals] = useState<Rental[]>([])

  useEffect(() => {
    if (session) {
      // Fetch rentals from the backend
      fetch('/api/rentals')
        .then(response => response.json())
        .then(data => setRentals(data))
        .catch(error => console.error('Error fetching rentals:', error))
    }
  }, [session])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Rentals</h1>
        <p>You need to be signed in to view your rentals. <Link href="/auth/signin" className="text-blue-500 hover:underline">Sign in</Link></p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Rentals</h1>
      {rentals.length === 0 ? (
        <p>You have no rentals. <Link href="/categories" className="text-blue-500 hover:underline">Browse equipment</Link> to rent items.</p>
      ) : (
        <ul className="space-y-4">
          {rentals.map((rental) => (
            <li key={rental.id} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-lg font-semibold">{rental.name}</h2>
              <p className="text-gray-600">Rental Period: {rental.startDate} to {rental.endDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
} 