import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Meal } from '@/interfaces'

interface HistoryState {
  history: Meal[]
  addMeal: (meal: Meal) => void
  removeMeal: (name: string) => void
}

const useHistoryStore = create<HistoryState>()(
  persist((set, get) => ({
    history: [],

    addMeal: meal =>
      set(state => {
        let newHistory = [...state.history, meal]

        if (state.history.length > 5) {
          newHistory = newHistory.filter((_, i) => i !== 0)
        }
        return { history: newHistory }
      }),

    removeMeal: name =>
      set(state => {
        const newHistory = state.history.filter(meal => meal.name !== name)
        return { history: newHistory }
      })
  }))
)

export default useHistoryStore
