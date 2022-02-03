export interface Company {
    id: number;  
    title: string;
    isSelected: boolean
  }

export type C = keyof Company;
