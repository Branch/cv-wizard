import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Editor() {
    return (
        <section>
            <h2 className="font-bold mb-4 text-2xl">Personliga uppgifter</h2>

            <div className="flex justify-between gap-4 mb-8">
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="title">Jobbtitel</Label>
                    <Input
                        type="text"
                        id="title"
                        placeholder="Telefonsäljare"
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="picture">Profilbild</Label>
                    <Input id="picture" type="file" />
                </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input type="text" id="name" placeholder="Anna Andersson" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="email">E-post</Label>
                    <Input
                        placeholder="anna.andersson@gmail.com"
                        id="email"
                        type="email"
                    />
                </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input type="text" id="phone" placeholder="0701 23 45 67" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="city">Stad</Label>
                    <Input placeholder="Stockholm" id="city" type="text" />
                </div>
            </div>
        </section>
    )
}
