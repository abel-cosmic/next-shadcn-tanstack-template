import { create } from "zustand";

export const createGenericStore = <T>(initialData: T, modelName: string) => {
  return create<GenericStore<T>>((set) => ({
    data: initialData,
    setData: (data) => {
      set({ data });
    },
    updateField: (key, value) =>
      set((state) => ({
        data: { ...state.data, [key]: value },
      })),
    reset: () => set({ data: initialData }),
  }));
};
