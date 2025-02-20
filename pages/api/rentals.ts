import { NextApiRequest, NextApiResponse } from 'next'

// Mock database
let rentalsDatabase: any[] = []

// This is a mock function. Replace it with actual database logic.
async function saveRentalsToDatabase(rentals: any) {
  rentalsDatabase.push(...rentals)
  return true
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request:', req.method, req.body)

  if (req.method === 'POST') {
    try {
      const { name, email, paymentMethod, rentals } = req.body

      // Validate the data
      if (!name || !email || !rentals || rentals.length === 0) {
        console.error('Invalid data:', req.body)
        return res.status(400).json({ message: 'Invalid data' })
      }

      // Save the rentals to the database
      const success = await saveRentalsToDatabase(rentals)

      if (!success) {
        throw new Error('Failed to save rentals')
      }

      res.status(200).json({ message: 'Rentals saved successfully' })
    } catch (error) {
      console.error('Error processing request:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else if (req.method === 'GET') {
    res.status(200).json(rentalsDatabase)
  } else {
    res.setHeader('Allow', ['POST', 'GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
} 