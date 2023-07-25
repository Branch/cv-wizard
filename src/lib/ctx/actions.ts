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
