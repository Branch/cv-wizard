import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="sv" className={inter.className}>
            <body>{children}</body>
        </html>
    )
}
export const metadata: Metadata = {
    title: 'Home!',
    description: 'Welcome to Next.js',
}
