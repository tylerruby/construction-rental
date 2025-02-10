import Link from 'next/link'
import Image from 'next/image'

interface CategoryCardProps {
  href: string
  title: string
  description: string
  imageUrl: string
}

export default function CategoryCard({ href, title, description, imageUrl }: CategoryCardProps) {
  return (
    <Link href={href} className="group block p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
      <div className="aspect-video relative mb-4 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
} 