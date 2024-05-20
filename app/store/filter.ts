import { create } from "zustand";

const useFilterStore = create((set) => ({
  filtersList: [],
  addList: (filter: any) => {
    set((state: { filtersList: any }) => ({
      filtersList: [...state.filtersList, { ...filter, status: "available" }],
    }));
  },
  deleteList: ({ name, value }: { name: string; value: string }) => {
    set((state: { filtersList: any }) => ({
      filtersList: state.filtersList.filter(
        (filter: any) => filter.name !== name || filter.value !== value,
      ),
    }));
	},
}));

export default useFilterStore;

