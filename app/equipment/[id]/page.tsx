'use client'

// Show detailed information about each piece of equipment
// Include specs, availability calendar, and booking form 

import { useState } from 'react'
import { equipmentData } from '@/data/equipmentData'
import { useCart } from '@/components/CartContext'

interface EquipmentPageProps {
  params: {
    id: string
  }
}

export default function EquipmentPage({ params }: EquipmentPageProps) {
  const { id } = params
  const { addToCart } = useCart()

  // Initialize dates
  const today = new Date()
  const nextMonth = new Date(today)
  nextMonth.setMonth(today.getMonth() + 1)

  const [startDate, setStartDate] = useState(today.toISOString().split('T')[0])
  const [endDate, setEndDate] = useState(nextMonth.toISOString().split('T')[0])

  // Find the equipment item by ID
  const equipment = Object.values(equipmentData).flat().find(item => item.id === id)

  if (!equipment) {
    return <div>Equipment not found</div>
  }

  const handleAddToCart = (event: React.FormEvent) => {
    event.preventDefault()

    if (!startDate || !endDate) {
      alert('Please select both start and end dates.')
      return
    }

    addToCart({
      id: equipment.id,
      name: equipment.name,
      dailyRate: equipment.dailyRate,
      imageUrl: equipment.imageUrl,
      startDate,
      endDate,
    })

  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="relative mb-8">
        <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-96 object-cover rounded-lg" />
      </div>

      {/* Equipment Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{equipment.name}</h1>
          <p className="text-gray-600 mb-4">{equipment.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-gray-600">(4.5/5)</span>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-xl font-semibold">Daily Rate: ${equipment.dailyRate}</p>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Book This Equipment</h2>
          <form onSubmit={handleAddToCart}>
            <div className="mb-4">
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </form>
        </div>
      </div>

      {/* Additional Images */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-32 object-cover rounded" />
          <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-32 object-cover rounded" />
          <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-32 object-cover rounded" />
          <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-32 object-cover rounded" />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-600">Great equipment, very reliable!</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-600">Worked perfectly for our project.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 