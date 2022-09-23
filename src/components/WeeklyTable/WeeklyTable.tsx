import { Component, For } from 'solid-js'
import Row from './Row'
import { WeekDay } from '@/interfaces/Week'
import weekStore from '@/stores/weekStore'

interface Props {
  weekMenu: WeekDay[]
}

const WeeklyTable: Component<Props> = props => {
  let name: HTMLInputElement | undefined

  const handleAddDay = (name: string) => {
    if (name.length > 3) {
      weekStore.addDay(name)
    }
  }

  return (
    <div class="p-4 gap-4 flex flex-col">
      <For each={props.weekMenu} fallback={<div>Loading...</div>}>
        {day => <Row title={day.name} meals={day.meals}></Row>}
      </For>
      <div class="flex flex-col gap-4 items-center text-center">
        <input type="text" class="input input-bordered" ref={name} />
        <input type="date" class="input input-bordered" />
        <button onClick={() => handleAddDay(name!.value.trim())} class="btn btn-secondary">
          Add day
        </button>
      </div>
    </div>
  )
}

export default WeeklyTable
