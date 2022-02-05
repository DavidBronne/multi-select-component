export interface Item {
    id: number;  
    title: string;
    isSelected: boolean
  }

// Props -------------------------------------------

export interface PropsList {
  list:Item[],
  toggleIsSelected: (id:number) => void
}

export interface PropsSearchField {
  setSearchInput: (searchInput:string) => void;
  searchInput:string
}

export interface PropsMultiSelect {
    listInput?:Item[];
}

export interface PropsItemCard {
  title: string
}

export interface PropsClearButton {
  selectedList:Item[];  
  clearAll: () => void
}

// Reducer -------------------------------------------

export interface State {
  list: Item[],
  searchInput:string
}

export enum ReducerActionType {
  CLEAR_ALL,
  SET_SEARCH_INPUT,
  TOGGLE_IS_SELECTED
}

type ActionClearAll = {
  type: ReducerActionType.CLEAR_ALL ;
  payload: Item[] | string | number | boolean | undefined | any
}

type ActionSetSearchInput = {
  type: ReducerActionType.SET_SEARCH_INPUT ;
  payload: string 
}

type ActionToggleIsSelected  = {
  type: ReducerActionType.TOGGLE_IS_SELECTED ;
  payload: number
}

export type Action = ActionClearAll | ActionSetSearchInput | ActionToggleIsSelected