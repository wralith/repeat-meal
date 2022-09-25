import { Day, Meal, WeekDay } from '@/interfaces'
import create from 'zustand'

const initialWeek: Day[] = [{ name: 'Monday', meals: [{ name: 'Test Food', calories: 300, isDone: false }] }]

interface MenuState {
  menu: Day[]
  addDay: (name: WeekDay | string) => void
  // removeDay: (name: string) => void
  addMeal: (dayName: string, meal: Meal) => void
  // removeMeal: (dayName: string, mealName: string) => void
  // updateMeal: (dayName: string, meal: Meal) => void
  // toggleIsDone: (dayName: string, meal: Meal) => void
}

const useMenuStore = create<MenuState>()(set => ({
  menu: initialWeek,
  addDay: name => set(state => ({ menu: [...state.menu, { name, meals: [] }] })),
  addMeal: (dayName, meal) =>
    set(state => {
      const newWeek = state.menu.map(day =>
        day.name === dayName ? (day = { ...day, meals: [...day.meals, meal] }) : day
      )
      return { menu: newWeek }
    })
}))

export default useMenuStore
