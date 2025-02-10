import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-gray-600 mb-4">Could not find requested resource</p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 