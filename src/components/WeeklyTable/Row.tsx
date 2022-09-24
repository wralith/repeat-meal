import { Meal } from '@/interfaces/Meal'
import { Component, For } from 'solid-js'
import Item from './Item'
import weekStore from '@/stores/weekStore'

interface Props {
  meals: Meal[]
  title: string
}

const Row: Component<Props> = props => {
  let name: HTMLInputElement | undefined
  let cal: HTMLInputElement | undefined

  const handleAddItem = (name: string, calories: number) => {
    if (name.length > 3 && calories > 1) {
      weekStore.addMeal(props.title, { name, calories })
    }
  }

  return (
    <div class="w-full m-auto p-4 py-8 border-base-300/50 border-4 rounded-xl">
      <h3 class="text-2xl font-bold text-secondary">{props.title}</h3>
      <div class="h-6" />
      <div class="flex flex-col md:flex-row gap-3 w-full justify-start">
        <input class="input input-bordered" type="text" placeholder="Food Name" ref={name} />
        <input class="input input-bordered w-24" type="text" placeholder="Calories" ref={cal} />
        <button class="btn" onclick={() => handleAddItem(name!.value.trim(), parseInt(cal!.value.trim()))}>
          Add
        </button>
      </div>
      <div class="h-6" />
      <div class="flex flex-col flex-wrap gap-5 m-auto overflow-x-auto">
        <div class="flex gap-4">
          <For each={props.meals}>{meal => <Item belongTo={props.title} meal={meal}></Item>}</For>
        </div>
      </div>
    </div>
  )
}

export default Row
