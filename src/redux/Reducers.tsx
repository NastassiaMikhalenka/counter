export const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 5,
}

export type initialStateType = typeof initialState;

type ActionsType =
    onChangeMaxValueACType
    | onChangeMinValueACType
    | updateDataACType
    | onClickIncHandlerACType
    | onClickDischargeHandlerACType

const ON_CHANGE_MAX_VALUE = "ON_CHANGE_MAX_VALUE"
const ON_CHANGE_MIN_VALUE = "ON_CHANGE_MIN_VALUE"
const UPDATE_VALUES = "UPDATE_VALUES"
const ON_CLICK_INC = "ON_CLICK_INC"
const ON_CLICK_DIS = "ON_CLICK_DIS"

export const reducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ON_CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        case ON_CHANGE_MIN_VALUE:
            return {
                ...state,
                minValue: action.payload.minValue
            }
        case UPDATE_VALUES: {
            return {
                ...state,
                count: action.payload.count
            }
        }
        case ON_CLICK_INC: {
            return {
                ...state,
                count: action.payload.count + 1
            }
        }
        case ON_CLICK_DIS: {
            return {
                ...state,
                count: action.payload.minValue
            }
        }
        default:
            return state
    }
}

type onChangeMaxValueACType = ReturnType<typeof onChangeMaxValueAC>
export const onChangeMaxValueAC = (maxValue: number) => {
    return {
        type: "ON_CHANGE_MAX_VALUE",
        payload: {
            maxValue: maxValue,
        }
    } as const
}

type onChangeMinValueACType = ReturnType<typeof onChangeMinValueAC>
export const onChangeMinValueAC = (minValue: number) => {
    return {
        type: "ON_CHANGE_MIN_VALUE",
        payload: {
            minValue: minValue,
        }
    } as const
}

type updateDataACType = ReturnType<typeof updateDataValueAC>
export const updateDataValueAC = (minValue: number) => {
    return {
        type: "UPDATE_VALUES",
        payload: {
            count: minValue,
        }
    } as const
}

type onClickIncHandlerACType = ReturnType<typeof onClickIncHandlerAC>
export const onClickIncHandlerAC = (count: number) => {
    return {
        type: "ON_CLICK_INC",
        payload: {
            count: count
        }
    } as const
}

type onClickDischargeHandlerACType = ReturnType<typeof onClickDischargeHandlerAC>
export const onClickDischargeHandlerAC = (minValue: number) => {
    return {
        type: "ON_CLICK_DIS",
        payload: {
            minValue: minValue,
        }
    } as const
}