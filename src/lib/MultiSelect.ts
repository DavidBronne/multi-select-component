import { Item } from "../types/MultiSelect";

interface State {
    list: Item[],
    searchInput:string
}

enum ReducerActionType {
  CLEAR_ALL,
  SET_SEARCH_INPUT,
  TOGGLE_IS_SELECTED
}

interface Action {
    type: ReducerActionType ;
    payload: any | Item[] | string | number
}

const  search = ( list:Item[], value:string ):Item[] => {
 return (
    list.filter( item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
 ) 
}

const sort = (array:Item[]):Item[] => {
    return (
        array.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          })
    )
}

const multiSelectReducer = (state:State, action:Action):State => {
    const {type, payload} = action
    switch (type) {
      case ReducerActionType.CLEAR_ALL: {
        return {
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
        console.log('payload', payload);
        return {
            ...state,
            list: state.list.map((item => {
                return item.id === payload ? {...item, isSelected:!item.isSelected} : item
            }))
        }
      }
      default: {
        throw new Error(`Unsupported action type: ${type}`)
      }
    }
  }

export { 
    search,
    sort,
    multiSelectReducer
 }