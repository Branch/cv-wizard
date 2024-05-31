import { ExperienceState, GlobalState } from 'little-state-machine'
import { DateRange } from 'react-day-picker'

export function createExperience(
    state: GlobalState,
    payload: { experience: ExperienceState }
) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            experience: [...state.cvInfo.experience, payload.experience],
        },
    }
}
export function updateExperienceCity(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.experience.slice()
    tmpExp[payload.index]['city'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, experience: tmpExp } }
}
export function updateExperienceTitle(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.experience.slice()
    tmpExp[payload.index]['title'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, experience: tmpExp } }
}

export function updateExperienceEmployer(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.experience.slice()
    tmpExp[payload.index]['employer'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, experience: tmpExp } }
}
export function updateExperienceDesc(
    state: GlobalState,
    payload: { index: number; value: string }
) {
    const tmpExp = state.cvInfo.experience.slice()
    tmpExp[payload.index]['desc'] = payload.value

    return { ...state, cvInfo: { ...state.cvInfo, experience: tmpExp } }
}

export function updateExperienceDate(
    state: GlobalState,
    payload: { index: number; value: DateRange }
) {
    const tmpExp = state.cvInfo.experience.slice()
    tmpExp[payload.index]['date'] = payload.value
    return { ...state, cvInfo: { ...state.cvInfo, experience: tmpExp } }
}

export function updateExperienceOrder(
    state: GlobalState,
    payload: { arr: ExperienceState[] }
) {
    if (payload.arr.length <= 0) {
        return { ...state }
    }
    return { ...state, cvInfo: { ...state.cvInfo, experience: payload.arr } }
}
