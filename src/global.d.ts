import 'little-state-machine'

declare module 'little-state-machine' {
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
        }
        tpl: 'Clean' | '1337' | 'Zesam'
        color: string
    }
}
