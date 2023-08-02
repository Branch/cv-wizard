import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover'
import {
    updateName,
    setBirthdate,
    updateEmail,
    updateCity,
    updateImage,
    updatePhone,
    updateTitle,
    updateAddress,
    updateLicense,
    updatePostcode,
    updateProfile,
} from '@/lib/ctx/actions'
import { cn } from '@/lib/utils'
import { useStateMachine } from 'little-state-machine'
import { Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

export default function Editor() {
    const { actions, state } = useStateMachine({
        updateName,
        setBirthdate,
        updateCity,
        updateEmail,
        updateImage,
        updatePhone,
        updateTitle,
        updateAddress,
        updateLicense,
        updatePostcode,
        updateProfile,
    })

    /**
     * On profile pic change
     * @param file
     */
    const onImageChange = (file: any) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            actions.updateImage({ img: reader.result as string })
        }
    }

    return (
        <section>
            <h2 className="font-bold mb-4 text-2xl">Personliga uppgifter</h2>

            <div className="flex justify-between gap-4 mb-8">
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="title">Jobbtitel</Label>
                    <Input
                        defaultValue={state.cvInfo.title}
                        onChange={(e) =>
                            actions.updateTitle({ title: e.target.value })
                        }
                        type="text"
                        id="title"
                        placeholder="Telefonsäljare"
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="picture">Profilbild</Label>
                    <Input
                        id="picture"
                        type="file"
                        accept="image/jpg, image/png"
                        onChange={(e) => {
                            if (!e.target.files || e.target.files.length <= 0) {
                                actions.updateImage({
                                    img: '',
                                })
                                return
                            }
                            onImageChange(e.target?.files[0])
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input
                        type="text"
                        id="name"
                        defaultValue={state.cvInfo.name}
                        onChange={(e) =>
                            actions.updateName({ name: e.target.value })
                        }
                        placeholder="Anna Andersson"
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="email">E-post</Label>
                    <Input
                        defaultValue={state.cvInfo.email}
                        onChange={(e) =>
                            actions.updateEmail({ email: e.target.value })
                        }
                        placeholder="anna.andersson@gmail.com"
                        id="email"
                        type="email"
                    />
                </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input
                        type="text"
                        id="phone"
                        placeholder="0701 23 45 67"
                        defaultValue={state.cvInfo.phone}
                        onChange={(e) =>
                            actions.updatePhone({ phone: e.target.value })
                        }
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="city">Stad</Label>
                    <Input
                        placeholder="Stockholm"
                        id="city"
                        type="text"
                        defaultValue={state.cvInfo.city}
                        onChange={(e) =>
                            actions.updateCity({ city: e.target.value })
                        }
                    />
                </div>
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Extra personuppgifter</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex justify-between gap-4 mb-8">
                            <div className="grid w-full max-w-sm items-center gap-2">
                                <Label htmlFor="phone">Address</Label>
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="Storgatan 1"
                                    defaultValue={state.cvInfo.address}
                                    onChange={(e) =>
                                        actions.updateAddress({
                                            address: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-2">
                                <Label htmlFor="postcode">Postkod</Label>
                                <Input
                                    defaultValue={state.cvInfo.postcode}
                                    onChange={(e) =>
                                        actions.updatePostcode({
                                            postcode: e.target.value,
                                        })
                                    }
                                    placeholder="123 45"
                                    id="postcode"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 mb-8">
                            <div className="grid w-full max-w-sm items-center gap-2">
                                <Label htmlFor="license">Körkort</Label>
                                <Input
                                    defaultValue={state.cvInfo.license}
                                    onChange={(e) =>
                                        actions.updateLicense({
                                            license: e.target.value,
                                        })
                                    }
                                    placeholder="Ja"
                                    id="license"
                                    type="text"
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-2">
                                <Label htmlFor="birthdate">Födelsedatum</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="birthdate"
                                            variant={'outline'}
                                            className={cn(
                                                'justify-start text-left font-normal w-full max-w-sm',
                                                !state.cvInfo.birthdate &&
                                                    'text-muted-foreground'
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {state.cvInfo.birthdate ? (
                                                format(
                                                    new Date(
                                                        state.cvInfo.birthdate
                                                    ),
                                                    'PPP'
                                                )
                                            ) : (
                                                <span>Välj datum</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            captionLayout="dropdown"
                                            fromYear={1950}
                                            toYear={new Date().getFullYear()}
                                            mode="single"
                                            selected={
                                                state.cvInfo.birthdate ||
                                                new Date()
                                            }
                                            onSelect={(e) =>
                                                actions.setBirthdate({
                                                    birthdate: e as Date,
                                                })
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className="font-bold my-4 text-2xl">Profil</h2>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message" className="text-slate-400 font-normal">
                    2-4 korta meningar för att intressera arbetsgivaren.
                    Förslagsvis din nuvarande roll, bakgrund och bedrifter.
                </Label>
                <Textarea
                    defaultValue={state.cvInfo.profile}
                    onChange={(e) =>
                        actions.updateProfile({
                            profile: e.target.value,
                        })
                    }
                    placeholder="t.ex Passionerad förskolelärare med 7 års erfarenhet ..."
                    id="message"
                />
            </div>
        </section>
    )
}
