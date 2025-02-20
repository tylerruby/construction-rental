import Link from 'next/link'

const categories = [
  {
    id: 'scissor-lifts',
    name: 'Scissor Lifts',
    description: 'Electric and rough terrain scissor lifts',
    imageUrl: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/26-ft-wide-electric-scissor-lift-4-12.webp',
    items: ['Electric Scissor Lift 19ft', 'Rough Terrain Scissor Lift']
  },
  {
    id: 'boom-lifts',
    name: 'Boom Lifts',
    description: 'Articulating and telescopic boom lifts',
    imageUrl: 'https://www.unitedrentals.com/sites/default/files/styles/gallery_zoom/public/2023-08/JLG_800S_310-8026_NB.jpg.webp',
    items: ['Articulating Boom Lift 45ft', 'Telescopic Boom Lift']
  },
  {
    id: 'fork-lifts',
    name: 'Forklifts',
    description: 'Warehouse Forklifts',
    imageUrl: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/5000-lbs-cushion-tire-warehouse-forklift-11-105.webp',
    items: ['Warehouse Forklift 5000lb', 'Telehandler']
  },
  {
    id: 'telehandlers',
    name: 'Telehandlers',
    description: 'Personal and driveable vertical lifts',
    imageUrl: 'https://cdn-jlg.scdn5.secure.raxcdn.com/-/media/JLG-not-searched/highcapacity/2733-MarqueeHero.png?rev=e7afbeb239b646b5b316a9db8c083e19&hash=A3CABF1C40532092AA0657D4CC4EB777',
    items: ['Telehandler 1', 'Telehandler 2']
  },
  {
    id: 'skid-steers',
    name: 'Skid Steers',
    description: 'Compact loaders for versatile use',
    imageUrl: 'https://dealerwebcentral.s3.amazonaws.com/webres/john-deere-images/331g-compact-track-loader.jpg',
    items: ['Skid Steer 1', 'Skid Steer 2']
  },
  {
    id: 'mini-excavators',
    name: 'Mini Excavators',
    description: 'Compact excavators for small spaces',
    imageUrl: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20210311-c9b28-2ff4a',
    items: ['Mini Excavator 1', 'Mini Excavator 2']
  },
  {
    id: 'backhoe-loaders',
    name: 'Backhoe Loaders',
    description: 'Versatile digging and loading machines',
    imageUrl: 'https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/80c0c84ea28a40a9b35778bce0628fe1?v=5c711e2e',
    items: ['Backhoe Loader 1', 'Backhoe Loader 2']
  },
  {
    id: 'air-compressors',
    name: 'Air Compressors',
    description: 'Portable and stationary air compressors',
    imageUrl: 'https://media.baumpub.com/files/slides/locale_image/large/0213/53130_en_bf2a4_55769_doosan-portable-power-hp1600-vhp1400-air-compressor.jpg',
    items: ['Air Compressor 1', 'Air Compressor 2']
  },
  {
    id: 'portable-generators',
    name: 'Portable Generators',
    description: 'Portable generators for construction sites',
    imageUrl: 'https://www.foleyeq.com/media/images/XQ135G.original.jpg',
    items: ['Portable Generator 1', 'Portable Generator 2']
  },
  {
    id: 'one-person-lifts',
    name: 'One Person Lifts',
    description: 'One person lifts for construction sites',
    imageUrl: 'https://cdn.prod.website-files.com/6103ec620a0d5041b36face6/6595621dc7bf6a525305fa53_GENIE_TZ-50%402x.fe97f4f3.jpeg',
    items: ['One Person Lift 1', 'One Person Lift 2']
  },
  {
    id: 'towable-light-towers',
    name: 'Towable Light Towers',
    description: 'Towable light towers for construction sites',
    imageUrl: 'https://cdn11.bigcommerce.com/s-vtryl8/images/stencil/1280x1280/products/1165744/10768755/light-tower-mlts-led__30697.1730070715.jpg?c=2',
    items: ['Towable Light Tower 1', 'Towable Light Tower 2']
  },
  {
    id: 'carts-and-utvs',
    name: 'Carts & UTVs',
    description: 'Carts and UTVs for construction sites',
    imageUrl: 'https://www.catrentalstore.com/bin/service/dmtCustomImage?id=37570',
    items: ['Cart 1', 'UTV 1']
  },
]

export default function Categories() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Equipment Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg p-6">
            <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <ul className="list-disc list-inside">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link 
              href={`/categories/${category.id}`}
              className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-black"
            >
              View Equipment
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 