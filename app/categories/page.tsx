import Link from 'next/link'

const categories = [
  {
    id: 'heavy-machinery',
    name: 'Heavy Machinery',
    description: 'Large construction equipment for major projects',
    items: ['Excavators', 'Bulldozers', 'Cranes', 'Loaders']
  },
  {
    id: 'power-tools',
    name: 'Power Tools',
    description: 'Professional-grade power tools',
    items: ['Power Drills', 'Circular Saws', 'Jackhammers', 'Concrete Mixers']
  },
  {
    id: 'scaffolding',
    name: 'Scaffolding',
    description: 'Safe and reliable scaffolding systems',
    items: ['Frame Scaffolding', 'Mobile Scaffolding', 'Tower Scaffolding']
  }
]

export default function Categories() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Equipment Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <ul className="list-disc list-inside">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link 
              href={`/categories/${category.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Equipment
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 