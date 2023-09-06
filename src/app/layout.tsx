import Menubar from '@/components/Menubar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Booking App',
  description: 'Vaccine Booking App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' mt-16'}>
        <Menubar />
        {children}
      </body>
    </html>
  )
}
