import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Provider from '@/components/native/ctx/provider'

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
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
export const metadata: Metadata = {
    title: 'Home!',
    description: 'Welcome to Next.js',
}
