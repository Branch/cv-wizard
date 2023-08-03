import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { Experience, useStateMachine } from 'little-state-machine'
import { CalendarIcon, Calendar } from 'lucide-react'
import { format } from 'prettier'
import {
    updateExperienceTitle,
    updateExperienceEmployer,
} from '@/lib/ctx/actions'

export interface IExperience {
    id: number
    experience: Experience
}

export default function Experience({ id, experience }: IExperience) {
    const { title, employer, city, desc, startDate, endDate } = experience
    const { actions, state } = useStateMachine({
        updateExperienceTitle,
        updateExperienceEmployer,
    })

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline cursor-move">
                    {title.length > 0 && employer.length > 0
                        ? `${title} på ${employer}`
                        : 'Inte specificerat'}
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label htmlFor="title">Jobbtitel</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Storgatan 1"
                                defaultValue={title}
                                onChange={(e) =>
                                    actions.updateExperienceTitle({
                                        index: id,
                                        value: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label htmlFor="employer">Arbetsgivare</Label>
                            <Input
                                defaultValue={employer}
                                onChange={(e) =>
                                    actions.updateExperienceEmployer({
                                        index: id,
                                        value: e.target.value,
                                    })
                                }
                                id="employer"
                                type="text"
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
