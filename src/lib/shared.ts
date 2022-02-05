import { Item } from "../types/shared";

interface State {
    list: Item[],
    searchInput:string
}

interface Action {
    type: string ;
    payload?: any
}

const  searchFunction = ( list:Item[], value:string ):Item[] => {
 return (
    list.filter( item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
 ) 
}

const sortFunction = (array:Item[]):Item[] => {
    console.log('array', array);
    return (
        array.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          })
    )
}

const multiSelectReducer = (state:State, action:Action):State => {
    const {type, payload} = action
    switch (type) {
      case 'CLEAR_ALL_SELECTION_SEARCH': {
        return {
            list:[...payload],
            searchInput:""
        }
      }
      case 'SET_SEARCH_INPUT': {
        return {
            ...state,
            searchInput:payload
        }
      }
      case 'TOGGLE_IS_SELECTED': {
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
    searchFunction,
    sortFunction,
    multiSelectReducer
 }