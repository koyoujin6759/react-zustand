import { create } from "zustand";

const useStore = create((set) => ({
  count: "", // state 초기값
  selectedButton: null,

  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  removeCount: () => set({ count: 0 }),
  setCount: (count) => set({ count }),
  setSelectedButton: (button) => set({ selectedButton: button }),
}));

export default useStore;
