import { State, Action, ReducerActionType } from "../types/MultiSelect";
import { shapeAddedOption } from "./helpers";

const multiSelectReducer: React.Reducer<State , Action> = (state, action) => {
    const {type, payload} = action
    switch (type) {
      case ReducerActionType.CLEAR_ALL: {
        console.log('payload', payload);
        return {
            ...state,
            list:[...payload],
            searchInput:""
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
            list: [...state.list, shapeAddedOption(payload)]
        }
      }
      default: {
        throw new Error(`Unsupported action type: ${type}`)
      }
    }
  }

  export {multiSelectReducer}