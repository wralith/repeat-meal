import { Component, For, JSX } from 'solid-js'
import { TbApple } from 'solid-icons/tb'
import { Meal } from '@/interfaces/Meal'
import { TbX } from 'solid-icons/tb'
import weekStore from '@/stores/weekStore'

interface Props {
  meal: Meal
  belongTo: string
}

const Item: Component<Props> = props => {
  const handleDelete = () => {
    weekStore.removeMeal(props.belongTo, props.meal.name)
  }

  return (
    <div class="rounded-xl flex items-center justify-evenly shadow-md bg-secondary text-primary-content w-96 h-36 mb-2 p-4 gap-4">
      <TbApple size={60} class="text-primary/70 border-4 border-primary/70 rounded-full p-2" />
      <div class="flex flex-col gap-2 items-end">
        <h3 class="text-xl font-semibold">{props.meal.name}</h3>
        <p>{props.meal.calories} Calories</p>
      </div>
      <button
        onClick={() => handleDelete()}
        class="btn btn-square btn-error btn-outline text-primary hover:text-primary-content">
        <TbX size={24} />
      </button>
    </div>
  )
}

export default Item
