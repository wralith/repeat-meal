export interface Meal {
  id: string
  name: string
  description?: string
  recipe?: string
  calories?: number
  time: Date
  isDone: boolean
}

export type WeekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export interface Day {
  id: string
  name: WeekDay | string
  meals: Meal[]
}
