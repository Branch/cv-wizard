import Nav from '@/components/native/base/nav'
import Link from 'next/link'

export default function WebLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fixed bg-white/90 backdrop-blur-sm h-16 z-10 flex justify-between w-full px-24 border-b items-center">
                <div className="flex gap-4 justify-center items-center">
                    <Link href={'/'}>Min logga</Link>
                    <Nav />
                </div>
            </div>
            {children}
            <footer className="container text-sm py-12">
                <div className="border-b pb-12 mb-12">
                    <h3 className="font-bold">Kom igång</h3>
                    <ul className="flex flex-col gap-3 mt-4 text-slate-400">
                        <li>
                            <Link className=" hover:text-primary" href={''}>
                                Välj mall
                            </Link>
                        </li>
                        <li>
                            <Link className=" hover:text-primary" href={''}>
                                Fyll i dina uppgifter
                            </Link>
                        </li>
                        <li>
                            <Link className=" hover:text-primary" href={''}>
                                Exportera
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href={'/'}>Min logga</Link>
            </footer>
        </>
    )
}
