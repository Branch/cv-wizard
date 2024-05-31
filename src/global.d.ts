import 'little-state-machine'
import { DateRange } from 'react-day-picker'

declare module 'little-state-machine' {
    interface ExperienceState {
        id: string
        title: string
        employer: string
        city: string
        desc: string
        date?: DateRange
    }
    interface EducationState {
        id: string
        school: string
        education: string
        city: string
        desc: string
        date?: DateRange
    }
    interface GlobalState {
        cvInfo: {
            title: string
            address: string
            postcode: string
            name: string
            email: string
            img: string
            phone: string
            city: string
            license: string
            profile: string
            birthdate: undefined | Date
            experience: ExperienceState[]
            education: EducationState[]
        }
        tpl: 'Clean' | '1337' | 'Zesam'
        color: string
    }
}
