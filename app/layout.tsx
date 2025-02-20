import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { CartProvider } from '@/components/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Construction Equipment Rentals',
  description: 'Rent professional construction equipment for your projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
            </div>
          </Providers>
        </CartProvider>
      </body>
    </html>
  )
} 