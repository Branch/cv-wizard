import 'little-state-machine'

declare module 'little-state-machine' {
    interface GlobalState {
        cvInfo: {
            name: string
            email: string
            img: string
            phone: string
            city: string
        }
    }
}
