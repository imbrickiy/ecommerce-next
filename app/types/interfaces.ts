export interface IFilter {
  name?: string;
  value?: string;
  label?: string;
  [key: string]: any;
}
export interface IFilters {
  [index: number]: IFilter;
}
