// Create dynamic category pages with equipment listings
// Example: /categories/scissor-lifts, /categories/boom-lifts, etc. 

import Link from 'next/link'
import { equipmentData } from '@/data/equipmentData'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  const equipmentList = equipmentData[category] || []

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((equipment) => (
          <div key={equipment.id} className="border rounded-lg p-6">
            <Link href={`/equipment/${equipment.id}`}>
              <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-48 object-cover mb-4 rounded" />
            </Link>
            <h2 className="text-xl font-semibold mb-2">{equipment.name}</h2>
            <p className="text-gray-600 mb-4">{equipment.description}</p>
            <p className="text-gray-800 font-bold">Daily Rate: ${equipment.dailyRate}</p>
            <Link href={`/equipment/${equipment.id}`} className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-black">
              View Details
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
} 