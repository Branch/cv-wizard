import { EducationState, GlobalState } from 'little-state-machine'
import { DateRange } from 'react-day-picker'

export function createEducation(
    state: GlobalState,
    payload: { education: EducationState }
) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            education: [...state.cvInfo.education, payload.education],
        },
    }
}
export function updateEducationSchool(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.education.slice()
    tmpExp[payload.index]['school'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, education: tmpExp } }
}
export function updateEducationEducation(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.education.slice()
    tmpExp[payload.index]['education'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, education: tmpExp } }
}
export function updateEducationCity(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.education.slice()
    tmpExp[payload.index]['city'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, education: tmpExp } }
}

export function updateEducationDesc(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.education.slice()
    tmpExp[payload.index]['desc'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, education: tmpExp } }
}

export function updateEducationDate(
    state: GlobalState,
    payload: { index: number; value: DateRange }
) {
    const tmpExp = state.cvInfo.education.slice()
    tmpExp[payload.index]['date'] = payload.value
    return { ...state, cvInfo: { ...state.cvInfo, education: tmpExp } }
}

export function updateEducationOrder(
    state: GlobalState,
    payload: { arr: EducationState[] }
) {
    if (payload.arr.length <= 0) {
        return { ...state }
    }
    return { ...state, cvInfo: { ...state.cvInfo, education: payload.arr } }
}
