import create from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

import { Day, Meal, WeekDay } from '@/interfaces'

const initialWeek: Day[] = []

interface MenuState {
  menu: Day[]
  addDay: (name: WeekDay | string) => void
  removeDay: (id: string) => void
  addMeal: (dayId: string, meal: Meal) => void
  removeMeal: (dayId: string, mealId: string) => void
  updateMeal: (dayId: string, meal: Meal) => void
  toggleIsDone: (dayId: string, meal: Meal) => void
}

// TODO: Refactor, extract actions to another file, maybe with generics
const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      menu: initialWeek,

      addDay: name => set(state => ({ menu: [...state.menu, { id: uuidv4(), name, meals: [] }] })),

      removeDay: id =>
        set(state => {
          const newWeek = state.menu.filter(day => day.id !== id)
          return { menu: newWeek }
        }),

      addMeal: (dayId, meal) =>
        set(state => {
          const newWeek = state.menu.map(day =>
            day.id === dayId ? (day = { ...day, meals: [...day.meals, meal] }) : day
          )
          return { menu: newWeek }
        }),

      removeMeal: (dayId, mealId) => {
        set(state => {
          const newWeek = state.menu.map(day =>
            day.id === dayId ? (day = { ...day, meals: day.meals.filter(meal => meal.id !== mealId) }) : day
          )
          return { menu: newWeek }
        })
      },

      updateMeal: (dayId, meal) => {
        set(state => {
          const newWeek = state.menu.map(day =>
            day.id === dayId ? (day = { ...day, meals: day.meals.map(m => (m.id === meal.id ? meal : m)) }) : day
          )

          return { menu: newWeek }
        })
      },

      toggleIsDone: (dayId, meal) => get().updateMeal(dayId, { ...meal, isDone: !meal.isDone })
    }),
    { name: 'menu' }
  )
)

export default useMenuStore
