// Equipment management
// User management
// Rental oversight
// Analytics dashboard 

'use client'

import { useState } from 'react'
import { equipmentData } from '@/data/equipmentData'

export default function AdminPanel() {
  const [categories, setCategories] = useState(Object.keys(equipmentData))
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [equipmentList, setEquipmentList] = useState(equipmentData)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleAddCategory = () => {
    const newCategory = prompt('Enter new category name:')
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
      setEquipmentList({ ...equipmentList, [newCategory]: [] })
    }
  }

  const handleDeleteCategory = (category: string) => {
    if (confirm(`Are you sure you want to delete the category "${category}"?`)) {
      const updatedCategories = categories.filter(cat => cat !== category)
      const { [category]: _, ...rest } = equipmentList
      setCategories(updatedCategories)
      setEquipmentList(rest)
      setSelectedCategory(null)
    }
  }

  const handleAddEquipment = () => {
    if (!selectedCategory) return
    const name = prompt('Enter equipment name:')
    const description = prompt('Enter equipment description:')
    const dailyRate = parseFloat(prompt('Enter daily rate:') || '0')
    const imageUrl = prompt('Enter image URL:')

    if (name && description && !isNaN(dailyRate) && imageUrl) {
      const newEquipment = {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        description,
        dailyRate,
        imageUrl,
      }
      setEquipmentList({
        ...equipmentList,
        [selectedCategory]: [...equipmentList[selectedCategory], newEquipment],
      })
    }
  }

  const handleDeleteEquipment = (equipmentId: string) => {
    if (!selectedCategory) return
    const updatedEquipment = equipmentList[selectedCategory].filter(equip => equip.id !== equipmentId)
    setEquipmentList({
      ...equipmentList,
      [selectedCategory]: updatedEquipment,
    })
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="mb-4">
        <button onClick={handleAddCategory} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Category
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <button onClick={() => handleCategorySelect(category)} className="text-blue-500 hover:underline">
              Manage Equipment
            </button>
            <button onClick={() => handleDeleteCategory(category)} className="text-red-500 hover:underline ml-4">
              Delete Category
            </button>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Equipment in {selectedCategory}</h2>
          <button onClick={handleAddEquipment} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4">
            Add Equipment
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentList[selectedCategory].map(equipment => (
              <div key={equipment.id} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{equipment.name}</h3>
                <p className="text-gray-600 mb-4">{equipment.description}</p>
                <p className="text-gray-800 font-bold">Daily Rate: ${equipment.dailyRate}</p>
                <button onClick={() => handleDeleteEquipment(equipment.id)} className="text-red-500 hover:underline">
                  Delete Equipment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 