import 'little-state-machine'

declare module 'little-state-machine' {
    interface Experience {
        title: string
        employer: string
        city: string
        desc: string
        startDate: Date
        endDate?: Date | undefined
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
            experience: Experience[]
        }
        tpl: 'Clean' | '1337' | 'Zesam'
        color: string
    }
}
