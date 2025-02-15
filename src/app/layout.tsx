import '@/assets/scss/style.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'
import { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import favicon from "./favIcon.png";

export const metadata: Metadata = {
  title: {
    template: '%s Speed Script',
    default: DEFAULT_PAGE_TITLE,
  },

  description: 'Building Trust and Patience in Your Digital Journey',
  icons: {
    icon: './favIcon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{}</style>
      </head>
      <body>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  )
}
