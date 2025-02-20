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
    imageUrl: 'https://www.unitedrentals.com/sites/default/files/styles/gallery_zoom/public/2023-08/JLG_800S_310-8026_NB.jpg.webp'
  },
  {
    href: '/categories/fork-lifts',
    title: 'Forklifts',
    description: 'Warehouse Forklifts',
    imageUrl: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/5000-lbs-cushion-tire-warehouse-forklift-11-105.webp'
  },
  {
    href: '/categories/telehandlers',
    title: 'Telehandlers',
    description: 'Personal and driveable vertical lifts',
    imageUrl: 'https://cdn-jlg.scdn5.secure.raxcdn.com/-/media/JLG-not-searched/highcapacity/2733-MarqueeHero.png?rev=e7afbeb239b646b5b316a9db8c083e19&hash=A3CABF1C40532092AA0657D4CC4EB777'
  },
  {
    href: '/categories/skid-steers',
    title: 'Skid Steers',
    description: 'Compact loaders for versatile use',
    imageUrl: 'https://dealerwebcentral.s3.amazonaws.com/webres/john-deere-images/331g-compact-track-loader.jpg'
  },
  {
    href: '/categories/mini-excavators',
    title: 'Mini Excavators',
    description: 'Compact excavators for small spaces',
    imageUrl: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20210311-c9b28-2ff4a'
  },
  {
    href: '/categories/backhoe-loaders',
    title: 'Backhoe Loaders',
    description: 'Versatile digging and loading machines',
    imageUrl: 'https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/80c0c84ea28a40a9b35778bce0628fe1?v=5c711e2e'
  },
  {
    href: '/categories/air-compressors',
    title: 'Air Compressors',
    description: 'Portable and stationary air compressors',
    imageUrl: 'https://media.baumpub.com/files/slides/locale_image/large/0213/53130_en_bf2a4_55769_doosan-portable-power-hp1600-vhp1400-air-compressor.jpg'
  },
  {
    href: '/categories/portable-generators',
    title: 'Portable Generators',
    description: 'Portable generators for construction sites',
    imageUrl: 'https://www.foleyeq.com/media/images/XQ135G.original.jpg'
  },
  {
    href: '/categories/one-person-lifts',
    title: 'One Person Lifts',
    description: 'One person lifts for construction sites',
    imageUrl: 'https://cdn.prod.website-files.com/6103ec620a0d5041b36face6/6595621dc7bf6a525305fa53_GENIE_TZ-50%402x.fe97f4f3.jpeg'
  },
  {
    href: '/categories/towable-light-towers',
    title: 'Towable Light Towers',
    description: 'Towable light towers for construction sites',
    imageUrl: 'https://cdn11.bigcommerce.com/s-vtryl8/images/stencil/1280x1280/products/1165744/10768755/light-tower-mlts-led__30697.1730070715.jpg?c=2'
  },
  {
    href: '/categories/carts-and-utvs',
    title: 'Carts & UTVs',
    description: 'Carts and UTVs for construction sites',
    imageUrl: 'https://www.catrentalstore.com/bin/service/dmtCustomImage?id=37570'
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