import { Label } from '@/components/ui/label'
import { EducationState, useStateMachine } from 'little-state-machine'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ReactSortable } from 'react-sortablejs'
import { createEducation } from '@/lib/ctx/actions/education'
import EducationAccordion from '@/components/native/app/editor/accordion/education'
import { uid } from 'uid'

interface IEducationEditor {
    sortableEdu: EducationState[]
    setEduList: any
}
export default function EducationEditor({
    sortableEdu,
    setEduList,
}: IEducationEditor) {
    const { actions, state } = useStateMachine({
        createEducation,
    })
    return (
        <>
            <h2 className="font-bold my-4 text-2xl">Utbildning</h2>
            <div className="grid w-full gap-1.5">
                <Label
                    htmlFor="education"
                    className="text-slate-400 font-normal"
                >
                    Lägg till din relevanta utbildning här.
                </Label>
                {state.cvInfo.education ? (
                    <ReactSortable
                        list={sortableEdu}
                        animation={250}
                        setList={setEduList}
                    >
                        {sortableEdu.map((edu: EducationState, i) => {
                            return (
                                <EducationAccordion
                                    key={i}
                                    id={i}
                                    educationData={edu}
                                />
                            )
                        })}
                    </ReactSortable>
                ) : null}
                <Button
                    variant={'secondary'}
                    className="gap-1 font-bold"
                    onClick={() =>
                        actions.createEducation({
                            education: {
                                id: uid(),
                                school: '',
                                education: '',
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
