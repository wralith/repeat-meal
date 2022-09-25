export interface Meal {
  name: string
  description?: string
  recipe?: string
  calories?: number
  time?: Date
  isDone: boolean
}

export type WeekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export interface Day {
  name: WeekDay | string
  meals: Meal[]
}
