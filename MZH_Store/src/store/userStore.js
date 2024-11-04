import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      orders: [],
      
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
      
      addOrder: (order) => set((state) => ({
        orders: [...state.orders, { ...order, id: Date.now(), date: new Date().toISOString() }],
      })),
      
      getOrders: () => get().orders,
    }),
    {
      name: 'user-storage',
    }
  )
);