import { Component, createEffect, createSignal, For, JSX } from 'solid-js'
import { Meal } from '@/interfaces'
import weekStore from '@/stores/weekStore'
import { TbX } from 'solid-icons/tb'

interface Props {
  meal: Meal
  belongTo: string
}

const Item: Component<Props> = props => {
  let [isDone, setIsDone] = createSignal(false)

  const handleDelete = () => {
    weekStore.removeMeal(props.belongTo, props.meal.name)
  }

  return (
    <div
      class={`bg-base-content text-base-100 rounded-xl flex shadow-md min-w-[24rem] h-48 mb-2 p-4 gap-4 relative ${
        isDone() ? 'opacity-70' : ''
      }`}>
      <div class="flex flex-col gap-2 items-start">
        <pre>24:00</pre>
        <h3 class="text-xl font-semibold">{props.meal.name}</h3>
        <p>{props.meal.calories} Calories</p>
      </div>
      <button
        onClick={() => handleDelete()}
        class="absolute top-2 right-2 p-2 rounded-lg bg-neutral hover:bg-neutral-focus text-neutral-content transition-colors">
        <TbX />
      </button>
      <div class="absolute bottom-4 left-4 flex align-baseline gap-2" onChange={() => setIsDone(!isDone())}>
        <label for="eat" class="link link-hover font-bold">
          Done
        </label>
        <input id="eat" type="checkbox" class="checkbox"></input>
      </div>
    </div>
  )
}

export default Item
