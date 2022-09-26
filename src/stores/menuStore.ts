import { Day, Meal, WeekDay } from '@/interfaces'
import create from 'zustand'

const initialWeek: Day[] = [{ name: 'Monday', meals: [{ name: 'Test Food', calories: 300, isDone: false }] }]

interface MenuState {
  menu: Day[]
  addDay: (name: WeekDay | string) => void
  removeDay: (name: string) => void
  addMeal: (dayName: string, meal: Meal) => void
  removeMeal: (dayName: string, mealName: string) => void
  updateMeal: (dayName: string, meal: Meal) => void
  toggleIsDone: (dayName: string, meal: Meal) => void
}

// TODO: Unique keys? Raise error if same name given different units since name property used as a key!
// TODO: Refactor, extract actions maybe with generics
const useMenuStore = create<MenuState>()((set, get) => ({
  menu: initialWeek,

  addDay: name => set(state => ({ menu: [...state.menu, { name, meals: [] }] })),

  removeDay: name =>
    set(state => {
      const newWeek = state.menu.filter(day => day.name !== name)
      return { menu: newWeek }
    }),

  addMeal: (dayName, meal) =>
    set(state => {
      const newWeek = state.menu.map(day =>
        day.name === dayName ? (day = { ...day, meals: [...day.meals, meal] }) : day
      )
      return { menu: newWeek }
    }),

  removeMeal: (dayName, mealName) => {
    set(state => {
      const newWeek = state.menu.map(day =>
        day.name === dayName ? (day = { ...day, meals: day.meals.filter(meal => meal.name !== mealName) }) : day
      )
      return { menu: newWeek }
    })
  },

  updateMeal: (dayName, meal) => {
    set(state => {
      const newWeek = state.menu.map(day =>
        day.name === dayName ? (day = { ...day, meals: day.meals.map(m => (m.name === meal.name ? meal : m)) }) : day
      )

      return { menu: newWeek }
    })
  },

  toggleIsDone: (dayName, meal) => get().updateMeal(dayName, { ...meal, isDone: !meal.isDone })
}))

export default useMenuStore
