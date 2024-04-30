import { ExperienceState, GlobalState } from 'little-state-machine'
import { DateRange } from 'react-day-picker'

export function updateName(state: GlobalState, payload: { name: string }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updatePostcode(
    state: GlobalState,
    payload: { postcode: string }
) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateLicense(
    state: GlobalState,
    payload: { license: string }
) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateAddress(
    state: GlobalState,
    payload: { address: string }
) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateTitle(state: GlobalState, payload: { title: string }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateImage(state: GlobalState, payload: { img: string }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateEmail(state: GlobalState, payload: { email: string }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updatePhone(state: GlobalState, payload: { phone: string }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateCity(state: GlobalState, payload: { city: string }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateProfile(
    state: GlobalState,
    payload: { profile: string }
) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function setBirthdate(state: GlobalState, payload: { birthdate: Date }) {
    return {
        ...state,
        cvInfo: {
            ...state.cvInfo,
            ...payload,
        },
    }
}
export function updateColor(state: GlobalState, payload: { color: string }) {
    return {
        ...state,
        color: payload.color,
    }
}
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

export function updateExperienceDate(
    state: GlobalState,
    payload: { index: number; value: DateRange }
) {
    const tmpExp = state.cvInfo.experience.slice()
    tmpExp[payload.index]['date'] = payload.value
    console.log('tmp date', payload.value)
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
