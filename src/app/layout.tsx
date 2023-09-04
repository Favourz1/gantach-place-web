import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const openSansFont = localFont({
  src: [
    {
      path: '../assets/fonts/OpenSans-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/OpenSans-Bold.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--open-sans-light'
})

const oldStandardFont = localFont({
  src: [
    {
      path: '../assets/fonts/OldStandard.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/OldStandardBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/OldStandardItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--oldStandard-light'
})

const amaranthFont = localFont({
  src: [
    {
      path: '../assets/fonts/Amaranth.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AmaranthBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AmaranthBoldItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--amaranth'
})


export const metadata: Metadata = {
  title: 'Gantach Place',
  description: 'Comfort away from home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSansFont.variable} ${oldStandardFont.variable} ${amaranthFont.variable}`}>{children}</body>
    </html>
  )
}
