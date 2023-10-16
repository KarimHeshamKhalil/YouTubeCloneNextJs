import React from 'react'
import Navbar from './components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ['latin']
});

export const metadata = {
  title: "YoutubeClone",
  description: "Created by Karim!",
}


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
