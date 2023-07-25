import { useStateMachine } from 'little-state-machine'

export default function Preview() {
    const { state } = useStateMachine()

    return (
        <section className="bg-white">
            <h1>{state.cvInfo.name}</h1>
        </section>
    )
}
