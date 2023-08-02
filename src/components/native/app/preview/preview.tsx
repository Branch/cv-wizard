import { useStateMachine } from 'little-state-machine'
import Leet from '@/components/native/templates/leet'

export default function Preview() {
    const { state } = useStateMachine()
    const RenderTpl = () => {
        switch (state.tpl) {
            case '1337': {
                return <Leet {...state.cvInfo} />
            }
            default: {
                return <div>tjenare</div>
            }
        }
    }

    return (
        <section className="w-[450px] h-[700px]">
            <RenderTpl />
        </section>
    )
}
