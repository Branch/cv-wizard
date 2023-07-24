import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between py-24 relative overflow-hidden">
            <div className="bg-[url('/img/hero.svg')] w-full h-full absolute bg-no-repeat scale-[3] bg-center z-0"></div>
            <header className="container mx-auto flex flex-col justify-center items-center pt-24 px-64 relative">
                <h1 className="text-6xl block font-extrabold text-center">
                    Bygg ditt CV snabbt och enkelt, helt gratis.
                </h1>
                <p className="py-8 px-52 text-center">
                    Inga jobbiga konton inblandade. Välj bland populära mallar
                    såsom{' '}
                    <Link
                        className="text-highlightPrimary font-bold"
                        href={'/'}
                    >
                        Zesam
                    </Link>
                    ,{' '}
                    <Link
                        className="text-highlightPrimary font-bold"
                        href={'/'}
                    >
                        Clean
                    </Link>{' '}
                    eller{' '}
                    <Link
                        className="text-highlightPrimary font-bold"
                        href={'/'}
                    >
                        1337
                    </Link>{' '}
                    och kom igång direkt.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/app">Kom igång</Link>
                    </Button>
                    <Button variant={'secondary'}>Läs mer</Button>
                </div>
            </header>
        </main>
    )
}
