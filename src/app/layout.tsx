import './globals.css'
import { ContextProvider } from '@/context'
import { Flowbite } from 'flowbite-react'
import { Metadata } from 'next'
import App from './App'

export const metadata: Metadata = {
  title: 'My Blog',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Flowbite>
            <App>{children}</App>
          </Flowbite>
        </ContextProvider>
      </body>
    </html>
  )
}
