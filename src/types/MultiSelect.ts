export interface Item {
    id: number;  
    title: string;
    isSelected: boolean
  }

export interface PropsList {
  list:Item[],
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