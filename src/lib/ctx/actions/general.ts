import { GlobalState } from 'little-state-machine'

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
