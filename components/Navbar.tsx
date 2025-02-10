'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              ConstructRent
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/categories" className="hover:text-gray-600">
              Categories
            </Link>
            
            {isLoading ? (
              <div className="h-10 w-20 bg-gray-200 animate-pulse rounded" />
            ) : session ? (
              <>
                <Link href="/rentals" className="hover:text-gray-600">
                  My Rentals
                </Link>
                {session.user?.role === 'ADMIN' && (
                  <Link href="/admin" className="hover:text-gray-600">
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="hover:text-gray-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 