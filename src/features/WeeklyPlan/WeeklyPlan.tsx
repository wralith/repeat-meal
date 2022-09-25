import { Day } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import { Autocomplete, Button, Container, Group, Input, Space, Stack } from '@mantine/core'
import { useState } from 'react'
import Row from './Row'

const dummyPlan: Day[] = [{ name: 'Monday', meals: [{ name: 'Test Meal', isDone: false }] }]
const weekDay= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function WeeklyPlan() {
  const menu = useMenuStore(state => state.menu)
  const addDay = useMenuStore(state => state.addDay)

  const [dayInput, setDayInput] = useState('')

  return (
    <Container>
      <Stack align="stretch">
        {menu.map(day => (
          <Row key={day.name} day={day} />
        ))}
      </Stack>
      <Space h="lg" />
      <Group>
        <Autocomplete value={dayInput} onChange={setDayInput} data={weekDay} />
        <Input type="datetime-local" />
        <Button onClick={() => addDay(dayInput)}>Add day</Button>
      </Group>
    </Container>
  )
}

export default WeeklyPlan
