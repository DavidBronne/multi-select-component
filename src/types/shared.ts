export interface Company {
    id: number;  
    title: string;
    isSelected: boolean
  }

export interface PropsSelectedItems {
  selectedList:Company[];
  toggleIsSelected: (id:number) => void
}

export interface PropsSearchResult {
  searchResult:Company[],
  toggleIsSelected: (id:number) => void
}

export interface PropsSearchField {
  setSearchInput: (searchInput:string) => void;
  searchInput:string
}

export interface PropsMultiSelect {
    listInput:Company[];
}

export interface PropsItemCard {
  title: string
}

export interface PropsClearButton {
  selectedList:Company[];  
  clearAllSelectionAndSearch: () => void
}