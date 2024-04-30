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
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { ExperienceState, useStateMachine } from 'little-state-machine'
import { Calendar as CalendarIcon } from 'lucide-react'
import {
    updateExperienceTitle,
    updateExperienceEmployer,
    updateExperienceDate,
} from '@/lib/ctx/actions'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays, format, parseISO } from 'date-fns'
import moment from 'moment'

export interface IExperience {
    id: number
    experience: ExperienceState
}

export default function Experience({ id, experience }: IExperience) {
    const { title, employer, city, desc, date } = experience
    const { actions, state } = useStateMachine({
        updateExperienceTitle,
        updateExperienceEmployer,
        updateExperienceDate,
    })
    console.log('datum', date)
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
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="grid max-w-sm items-center gap-2">
                            <Label htmlFor="title">Start- och slutdatum</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        id="date"
                                        variant={'outline'}
                                        className={cn(
                                            'w-[300px] justify-start text-left font-normal',
                                            !date && 'text-muted-foreground'
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date?.from ? (
                                            date.to ? (
                                                <>
                                                    {moment(date?.from).format(
                                                        'YY-MM-DD'
                                                    )}{' '}
                                                    -{' '}
                                                    {moment(date.to).format(
                                                        'YY-MM-DD'
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {moment(date.from).format()}
                                                </>
                                            )
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        defaultMonth={date?.from}
                                        selected={date}
                                        onSelect={(e) => {
                                            actions.updateExperienceDate({
                                                index: id,
                                                value: {
                                                    from: e?.from,
                                                    to: e?.to,
                                                },
                                            })
                                        }}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                            {/* <div className="flex gap-2">
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
                            </div> */}
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
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="description">Beskrivning</Label>
                            <ReactQuill
                                theme="snow"
                                placeholder="Beskrivning av din roll"
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
