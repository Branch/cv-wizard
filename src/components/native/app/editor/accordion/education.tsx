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
import { EducationState, useStateMachine } from 'little-state-machine'
import { Calendar as CalendarIcon } from 'lucide-react'
import {
    updateEducationSchool,
    updateEducationEducation,
    updateEducationDate,
    updateEducationCity,
    updateEducationDesc,
} from '@/lib/ctx/actions/education'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays, format, parseISO } from 'date-fns'
import moment from 'moment'
import dynamic from 'next/dynamic'

export interface IEducation {
    id: number
    educationData: EducationState
}

export default function Education({ id, educationData }: IEducation) {
    const { school, education, city, desc, date } = educationData
    const { actions, state } = useStateMachine({
        updateEducationSchool,
        updateEducationEducation,
        updateEducationDate,
        updateEducationCity,
        updateEducationDesc,
    })
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline cursor-move">
                    {school.length > 0 && education.length > 0
                        ? `${school}, ${education}${city ? `, ${city}` : ''}`
                        : 'Inte specificerat'}
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label htmlFor="school">Skola</Label>
                            <Input
                                type="text"
                                id="school"
                                placeholder="KTH"
                                defaultValue={school}
                                onChange={(e) =>
                                    actions.updateEducationSchool({
                                        index: id,
                                        value: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label htmlFor="education">Examen</Label>
                            <Input
                                defaultValue={education}
                                onChange={(e) =>
                                    actions.updateEducationEducation({
                                        index: id,
                                        value: e.target.value,
                                    })
                                }
                                id="education"
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
                                            actions.updateEducationDate({
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
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label htmlFor="employer">Stad</Label>
                            <Input
                                defaultValue={city}
                                onChange={(e) =>
                                    actions.updateEducationCity({
                                        index: id,
                                        value: e.target.value,
                                    })
                                }
                                id="city"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="description">Beskrivning</Label>
                            <ReactQuill
                                modules={{
                                    toolbar: [
                                        [],
                                        ['underline', 'link'],
                                        [
                                            { list: 'ordered' },
                                            { list: 'bullet' },
                                        ],
                                    ],
                                }}
                                defaultValue={desc}
                                id="description"
                                theme="snow"
                                placeholder="Beskrivning av din roll"
                                onChange={(html) =>
                                    actions.updateEducationDesc({
                                        index: id,
                                        value: html,
                                    })
                                }
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
