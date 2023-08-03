import { useStateMachine } from 'little-state-machine'
import Leet from '@/components/native/templates/leet'

export default function Preview() {
    const { state } = useStateMachine()
    const RenderTpl = () => {
        switch (state.tpl) {
            case '1337': {
                return (
                    <Leet
                        {...{
                            address: state.cvInfo.address,
                            postcode: state.cvInfo.postcode,
                            img: state.cvInfo.img,
                            license: state.cvInfo.license,
                            birthdate: state.cvInfo.birthdate,
                            profile: state.cvInfo.profile,
                            title:
                                state.cvInfo.title.length > 0
                                    ? state.cvInfo.title
                                    : 'Telefonsäljare',
                            name:
                                state.cvInfo.name.length > 0
                                    ? state.cvInfo.name
                                    : 'Anna Andersson',
                            email:
                                state.cvInfo.email.length > 0
                                    ? state.cvInfo.email
                                    : 'anna.andersson@gmail.com',
                            city:
                                state.cvInfo.city.length > 0
                                    ? state.cvInfo.city
                                    : 'Stockholm',
                            phone:
                                state.cvInfo.phone.length > 0
                                    ? state.cvInfo.phone
                                    : '0701 23 45 67',
                        }}
                    />
                )
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
