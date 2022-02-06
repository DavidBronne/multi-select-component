import { State, Action, ReducerActionType } from "../types/MultiSelect";

const multiSelectReducer: React.Reducer<State , Action> = (state, action) => {
    const {type, payload} = action
    switch (type) {
      case ReducerActionType.INITIALIZE_OPTIONS: {
      
        return {
            ...state,
            list:[...payload],
            searchInput:"",
            error:'',
            loading: false,
        }
      }
      case ReducerActionType.OPTIONS_LOADING_START: {
       
        return {
            ...state,
            loading: payload,
        }
      }
      case ReducerActionType.OPTIONS_LOADING_ERROR: {
        return {
          list: [{
            id: 0,
            title: "Error",
            isSelected: false
          }],
          searchInput:"",
          error: payload,
          loading: false,
        }
      }
      case ReducerActionType.SET_SEARCH_INPUT: {
        return {
            ...state,
            searchInput:payload
        }
      }
      case ReducerActionType.TOGGLE_IS_SELECTED: {
        return {
            ...state,
            list: state.list.map((item => {
                return item.id === payload ? {...item, isSelected:!item.isSelected} : item
            }))
        }
      }
      case ReducerActionType.ADD_OPTION: {
        return {
            ...state,
            list: [...state.list, payload]
        }
      }
      case ReducerActionType.CLEAR_ALL: {
        return {
            ...state,
            list: state.list.map((item => {
              return {...item, isSelected:payload}
          }))
        }
      }
      default: {
        throw new Error(`Unsupported action type: ${type}`)
      }
    }
  }

  export {multiSelectReducer}