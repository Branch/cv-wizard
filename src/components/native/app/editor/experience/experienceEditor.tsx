import { Label } from '@/components/ui/label'
import { ExperienceState, useStateMachine } from 'little-state-machine'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ReactSortable } from 'react-sortablejs'
import { createExperience } from '@/lib/ctx/actions/experience'
import ExperienceAccordion from '@/components/native/app/editor/accordion/experience'
import { uid } from 'uid'

interface IExperienceEditor {
    sortableExp: ExperienceState[]
    setExpList: any
}
export default function ExperienceEditor({
    sortableExp,
    setExpList,
}: IExperienceEditor) {
    const { actions, state } = useStateMachine({
        createExperience,
    })
    return (
        <>
            <h2 className="font-bold my-4 text-2xl">Arbetslivserfarenhet</h2>
            <div className="grid w-full gap-1.5">
                <Label
                    htmlFor="experience"
                    className="text-slate-400 font-normal"
                >
                    Din relevanta arbetslivserfarenhet (senaste 10 åren). Jobba
                    med texten och använd listor och lyft dina bedrifter i
                    samband med KPI:er.
                </Label>
                {state.cvInfo.experience ? (
                    <ReactSortable
                        list={sortableExp}
                        animation={250}
                        setList={setExpList}
                    >
                        {sortableExp.map((exp: ExperienceState, i: number) => {
                            return (
                                <ExperienceAccordion
                                    key={i}
                                    id={i}
                                    experience={exp}
                                />
                            )
                        })}
                    </ReactSortable>
                ) : null}
                <Button
                    variant={'secondary'}
                    className="gap-1 font-bold"
                    onClick={() =>
                        actions.createExperience({
                            experience: {
                                id: uid(),
                                title: '',
                                employer: '',
                                city: '',
                                desc: '',
                                date: { from: new Date() },
                            },
                        })
                    }
                >
                    <Plus size={16} /> Lägg till
                </Button>
            </div>
        </>
    )
}
