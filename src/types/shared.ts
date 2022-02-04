export interface Company {
    id: number;  
    title: string;
    isSelected: boolean
  }

export interface State {
  list:Company[];
  searchInput: string
}
export type KeyOfCompany = keyof Company;
