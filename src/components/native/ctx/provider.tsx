'use client'
import { createStore, StateMachineProvider } from 'little-state-machine'
import { ReactNode } from 'react'

export default function Provider({ children }: { children: ReactNode }) {
    createStore({
        cvInfo: { name: '', email: '', img: '', phone: '', city: '' },
    })

    return <StateMachineProvider>{children}</StateMachineProvider>
}
