export interface Item {
    id: number;  
    title: string;
    isSelected: boolean
  }

// Props -------------------------------------------

export interface PropsList {
  list:Item[],
  toggleIsSelected: (id:number) => void,
  name:string
}

export interface PropsSearchField {
  setSearchInput: (searchInput:string) => void;
  searchInput:string
}

export interface PropsMultiSelect {
    endPointCall?:string;
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
  searchInput:string,
  error:string,
  loading: boolean,
}

export enum ReducerActionType {
  INITIALIZE_OPTIONS,
  OPTIONS_LOADING_START,
  OPTIONS_LOADING_ERROR,
  SET_SEARCH_INPUT,
  TOGGLE_IS_SELECTED,
  ADD_OPTION,
  CLEAR_ALL
}

type InitializeOptions = {
  type: ReducerActionType.INITIALIZE_OPTIONS ;
  payload: any | Item[]
}

type OptionsLoadingStart = {
  type: ReducerActionType.OPTIONS_LOADING_START ;
  payload:boolean
}

type OptionsLoadingError = {
  type: ReducerActionType.OPTIONS_LOADING_ERROR ;
  payload:string
}

type ActionSetSearchInput = {
  type: ReducerActionType.SET_SEARCH_INPUT ;
  payload: string 
}

type ActionToggleIsSelected  = {
  type: ReducerActionType.TOGGLE_IS_SELECTED ;
  payload: number
}

type ActionAddOption  = {
  type: ReducerActionType.ADD_OPTION ;
  payload: Item
}

type ClearAll  = {
  type: ReducerActionType.CLEAR_ALL ;
  payload: boolean
}

export type Action = InitializeOptions | ActionSetSearchInput | ActionToggleIsSelected | ActionAddOption | OptionsLoadingError | OptionsLoadingStart | ClearAll; 