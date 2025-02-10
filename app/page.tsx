import CategoryCard from '@/components/CategoryCard'

const categories = [
  {
    href: '/categories/scissor-lifts',
    title: 'Scissor Lifts',
    description: 'Electric and rough terrain scissor lifts',
    imageUrl: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/26-ft-wide-electric-scissor-lift-4-12.webp'
  },
  {
    href: '/categories/boom-lifts',
    title: 'Boom Lifts',
    description: 'Articulating and telescopic boom lifts',
    imageUrl: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/fork-lifts',
    title: 'Forklifts',
    description: 'Warehouse Forklifts',
    imageUrl: 'https://images.unsplash.com/photo-1601372579003-5be5b0199c85?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/single-man-lifts',
    title: 'Single Man Lifts',
    description: 'Personal and driveable vertical lifts',
    imageUrl: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/site-services',
    title: 'Construction Site Services',
    description: 'Portable toilets, storage, and lighting',
    imageUrl: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/earthmoving',
    title: 'Earthmoving Equipment',
    description: 'Excavators, bulldozers, and loaders',
    imageUrl: 'https://images.unsplash.com/photo-1533155929419-7b7cbfd58b8d?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/air-equipment',
    title: 'Air Equipment',
    description: 'Compressors, tools, and accessories',
    imageUrl: 'https://images.unsplash.com/photo-1530983822321-fcac2d3c0f06?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/cranes',
    title: 'Cranes',
    description: 'Mobile and tower cranes',
    imageUrl: 'https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/compaction',
    title: 'Compaction Equipment',
    description: 'Rollers, plates, and rammers',
    imageUrl: 'https://images.unsplash.com/photo-1512578659172-63a4634c05ec?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/vehicles',
    title: 'Construction Vehicles',
    description: 'Dump trucks, trailers, and utility vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1506843761715-4b6b28837bb2?w=800&auto=format&fit=crop&q=80'
  },
  {
    href: '/categories/hvac',
    title: 'HVAC',
    description: 'Heating, ventilation, and air conditioning equipment',
    imageUrl: 'https://images.unsplash.com/photo-1631744591853-998c4308bbb0?w=800&auto=format&fit=crop&q=80'
  },
]

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Popular Equipment Rentals</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.href}
              {...category}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 