export interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export type Order = 'asc' | 'desc';

export interface GenericTableProps {
  title: string;
  headCells: HeadCell[];
  rows: Data[];
}