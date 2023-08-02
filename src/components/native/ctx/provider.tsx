'use client'
import { createStore, StateMachineProvider } from 'little-state-machine'
import { ReactNode } from 'react'

export default function Provider({ children }: { children: ReactNode }) {
    createStore({
        cvInfo: {
            title: '',
            postcode: '',
            address: '',
            name: '',
            email: '',
            img: '',
            phone: '',
            city: '',
            license: '',
            birthdate: undefined,
        },
        tpl: '1337',
        color: '#000000',
    })

    return <StateMachineProvider>{children}</StateMachineProvider>
}
