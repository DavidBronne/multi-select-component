export interface Item {
    id: number;  
    title: string;
    isSelected: boolean
  };

// Props -------------------------------------------

export interface PropsList {
  list:Item[],
  toggleIsSelected: (id:number) => void,
  name:string
};

export interface PropsSearchField {
  setSearchInput: (searchInput:string) => void;
  searchInput:string
};

export interface PropsMultiSelect {
    listInput?:Item[];
};

export interface PropsItemCard {
  title: string
};

export interface PropsClearButton {
  selectedList:Item[];  
  clearAll: () => void
};

export interface PropsAddOption {
  addOption: (option:string) => void
};

// Reducer -------------------------------------------

export interface State {
  list: Item[],
  searchInput:string
};

export enum ReducerActionType {
  CLEAR_ALL,
  SET_SEARCH_INPUT,
  TOGGLE_IS_SELECTED,
  ADD_OPTION
};

type ActionClearAll = {
  type: ReducerActionType.CLEAR_ALL ;
  payload: any | Item[]
};

type ActionSetSearchInput = {
  type: ReducerActionType.SET_SEARCH_INPUT ;
  payload: string 
};

type ActionToggleIsSelected  = {
  type: ReducerActionType.TOGGLE_IS_SELECTED ;
  payload: number
};

type ActionAddOption  = {
  type: ReducerActionType.ADD_OPTION ;
  payload: string
};

export type Action = ActionClearAll | ActionSetSearchInput | ActionToggleIsSelected | ActionAddOption;