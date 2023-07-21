import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between py-24">
            <section className="container mx-auto flex flex-col justify-center items-center px-24">
                <h1 className="text-6xl block font-extrabold leading-tight text-center">
                    Bygg ditt CV snabbt och enkelt, helt gratis.
                </h1>
                <p className="py-8 px-52 text-center">
                    Inga jobbiga konton inblandade. Välj bland populära mallar
                    såsom{' '}
                    <Link className="underline" href={'/'}>
                        Zesam
                    </Link>
                    ,{' '}
                    <Link className="underline" href={'/'}>
                        Clean
                    </Link>{' '}
                    eller{' '}
                    <Link className="underline" href={'/'}>
                        1337
                    </Link>{' '}
                    och kom igång direkt.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/login">Kom igång</Link>
                    </Button>
                    <Button variant={'secondary'}>Läs mer</Button>
                </div>
            </section>
        </main>
    )
}
