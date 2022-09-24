import { Meal } from '@/interfaces'
import { WeekDay } from '@/interfaces'
import { createRoot } from 'solid-js'
import { createStore } from 'solid-js/store'

const initialWeek: WeekDay[] = [{ name: 'Monday', meals: [{ name: 'Test Food', calories: 300 }] }]
const weekSolidStore = createStore(initialWeek)

interface WeekStoreType {
  get: WeekDay[]
  set: (week: WeekDay[]) => void
  addDay: (day: string) => void
  removeDay: (name: string) => void
  addMeal: (dayName: string, meal: Meal) => void
  removeMeal: (dayName: string, mealName: string) => void
}

function weekStore(): WeekStoreType {
  const get = weekSolidStore[0]

  const set = (week: WeekDay[]) => weekSolidStore[1](week)

  const addDay = (name: string) => {
    set([...get, { name, meals: [] }])
  }

  const removeDay = (name: string) => {
    const newWeek = get.filter(day => day.name !== name)
    set(newWeek)
  }

  const addMeal = (dayName: string, meal: Meal) => {
    const newWeek = get.map(day => (day.name === dayName ? (day = { ...day, meals: [...day.meals, meal] }) : day))
    set(newWeek)
  }

  const removeMeal = (dayName: string, mealName: string) => {
    const newWeek = get.map(day =>
      day.name === dayName ? (day = { ...day, meals: day.meals.filter(meal => meal.name !== mealName) }) : day
    )
    set(newWeek)
  }

  return {
    get,
    set,
    addDay,
    removeDay,
    addMeal,
    removeMeal,
  }
}

export default createRoot(weekStore)
