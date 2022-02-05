export interface Item {
    id: number;  
    title: string;
    isSelected: boolean
  }

export interface PropsSelectedItems {
  selectedList:Item[];
  toggleIsSelected: (id:number) => void
}

export interface PropsSearchResult {
  searchResult:Item[],
  toggleIsSelected: (id:number) => void
}

export interface PropsSearchField {
  setSearchInput: (searchInput:string) => void;
  searchInput:string
}

export interface PropsMultiSelect {
    listInput:Item[];
}

export interface PropsItemCard {
  title: string
}

export interface PropsClearButton {
  selectedList:Item[];  
  clearAll: () => void
}