import { Day } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import getDay from '@/utils/getDay'
import { Autocomplete, Button, Container, Group, Input, Space, Stack, TextInput } from '@mantine/core'
import { DatePicker, DateRangePickerProps, DateRangePickerValue } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons'
import { useEffect, useState } from 'react'
import Row from './Row'

const dummyPlan: Day[] = [{ name: 'Monday', meals: [{ name: 'Test Meal', isDone: false }] }]

function WeeklyPlan() {
  const menu = useMenuStore(state => state.menu)
  const addDay = useMenuStore(state => state.addDay)

  const [dayInput, setDayInput] = useState('')
  const [dateInput, setDateInput] = useState<Date | null>(new Date())

  useEffect(() => {
    if (dateInput) {
      setDayInput(getDay(dateInput))
    }
  }, [dateInput, setDateInput])

  useEffect(() => {
    console.log(menu)
  }, [menu])

  return (
    <Container>
      <Stack align="stretch">
        {menu && menu.map(day => (
          <Row key={day.name} day={day} />
        ))}
      </Stack>
      <Space h="lg" />
      <Group>
        <DatePicker
          placeholder="Pick a date"
          icon={<IconCalendar size={16} />}
          value={dateInput}
          onChange={setDateInput}
        />
        <TextInput value={dayInput} onChange={e => setDayInput(e.currentTarget.value)} placeholder="Name of the Day" />
        <Button onClick={() => addDay(dayInput)}>Add day</Button>
      </Group>
    </Container>
  )
}

export default WeeklyPlan
