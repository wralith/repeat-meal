import { Button, Container, Group, Space, Stack, Text, TextInput, Title } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons'
import { useEffect, useState } from 'react'

import useMenuStore from '@/stores/menuStore'
import getDay from '@/utils/getDay'
import Row from './Row'

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

  const handleAddDay = () => {
    if (dayInput) {
      addDay(dayInput)
      setDayInput('')
      setDateInput(null)
    }
  }

  return (
    <Container>
      {menu.length > 0 ? (
        <Stack align="stretch">{menu && menu.map(day => <Row key={day.id} day={day} />)}</Stack>
      ) : (
        <Stack pt={100}>
          <Title order={2} py="xl">
            Pick a day to start shaping your menu! 🐱
          </Title>
          <Text style={{ opacity: '60%' }}>You can name the day!</Text>
          <Space h="xl" />
        </Stack>
      )}
      <Space h="lg" />
      <Group>
        <DatePicker
          placeholder="Pick a date"
          icon={<IconCalendar size={16} />}
          value={dateInput}
          onChange={setDateInput}
        />
        <TextInput value={dayInput} onChange={e => setDayInput(e.currentTarget.value)} placeholder="Name of the Day" />
        <Button onClick={handleAddDay}>Add day</Button>
      </Group>
    </Container>
  )
}

export default WeeklyPlan
