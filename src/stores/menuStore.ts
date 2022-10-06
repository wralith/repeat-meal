import create from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

import { Day, Meal, WeekDay } from '@/interfaces'

const initialWeek: Day[] = []

interface MenuState {
  menu: Day[]
  addDay: (name: WeekDay | string, time: Date) => void
  removeDay: (id: string) => void
  addMeal: (dayId: string, meal: Meal) => void
  removeMeal: (dayId: string, mealId: string) => void
  updateMeal: (dayId: string, meal: Meal) => void
  toggleIsDone: (dayId: string, meal: Meal) => void
  changeColor: (dayId: string, meal: Meal, color: string) => void
}

// TODO: Refactor, extract actions to another file, maybe with generics
const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      menu: initialWeek,

      addDay: (name, time) =>
        set(state => {
          time.setHours(0, 0, 0, 0)
          const newWeek = [...state.menu, { id: uuidv4(), time, name, meals: [] }]
          return { menu: newWeek }
        }),

      removeDay: id =>
        set(state => {
          const newWeek = state.menu.filter(day => day.id !== id)
          return { menu: newWeek }
        }),

        // TODO: It does not look good! There should be better way to implement this
      addMeal: (dayId, meal) =>
        set(state => {
          const hours = meal.time.getHours()
          const minutes = meal.time.getMinutes()

          const newWeek = state.menu.map(day =>
            {
              if (day.id === dayId) {
                const mealTime = new Date(day.time)
                mealTime.setHours(hours, minutes)
                return day = {...day, meals: [...day.meals, {...meal, time: mealTime}]}
              } else {
                return day
              }
            }
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

      toggleIsDone: (dayId, meal) => get().updateMeal(dayId, { ...meal, isDone: !meal.isDone }),

      changeColor: (dayId, meal, color) => get().updateMeal(dayId, { ...meal, displayColor: color })
    }),

    { name: 'menu' }
  )
)

export default useMenuStore
