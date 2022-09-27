import {
  ActionIcon,
  Button,
  Collapse,
  createStyles,
  Divider,
  Group,
  Paper,
  ScrollArea,
  Space,
  Stack,
  Textarea,
  TextInput,
  Title
} from '@mantine/core'
import { IconClock, IconMinus, IconPlus, IconX } from '@tabler/icons'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Day, Meal } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import Item from './Item'
import { TimeInput } from '@mantine/dates'

const useStyles = createStyles(theme => ({
  itemGroup: {
    width: 'full',
    flexWrap: 'nowrap',
    overflow: 'auto',
    paddingBottom: '1rem'
  }
}))

interface Props {
  day: Day
}

function Row({ day }: Props) {
  const { classes } = useStyles()
  const addMeal = useMenuStore(state => state.addMeal)
  const removeDay = useMenuStore(state => state.removeDay)

  const [showInputGroup, setShowInputGroup] = useState(false)
  const [mealInput, setMealInput] = useState('')
  const [descInput, setDescInput] = useState('')
  const [timeInput, setTimeInput] = useState(new Date())

  const handleAddMeal = () => {
    if (mealInput.length > 0) {
      const newMeal: Meal = {
        id: uuid(),
        name: mealInput,
        time: timeInput,
        description: descInput,
        isDone: false
      }

      addMeal(day.id, newMeal)
      setMealInput('')
      setDescInput('')
    }
  }

  return (
    <Paper shadow="sm" p="lg">
      <Group position="apart" style={{ width: '100%' }}>
        <Title order={2}>{day.name}</Title>
        <ActionIcon onClick={() => removeDay(day.id)}>
          <IconX />
        </ActionIcon>
      </Group>
      <Space h="sm" />

      <ScrollArea>
        <Group className={classes.itemGroup}>
          {day.meals
            .sort((a, b) => +a.time - +b.time)
            .map(meal => (
              <Item dayId={day.id} key={meal.id} meal={meal} />
            ))}
        </Group>
      </ScrollArea>

      <Divider my="md" label={`Add new meal for ${day.name}`} labelPosition="center" />

      <ActionIcon
        variant="outline"
        color="violet"
        style={{ margin: 'auto' }}
        onClick={() => setShowInputGroup(o => !o)}
      >
        {!showInputGroup ? <IconPlus /> : <IconMinus />}
      </ActionIcon>

      <Collapse in={showInputGroup}>
        <Stack mt="lg">
          <TimeInput icon={<IconClock size={14} />} value={timeInput} onChange={setTimeInput} />
          <TextInput placeholder="Meal Name" value={mealInput} onChange={e => setMealInput(e.currentTarget.value)} />
          <Textarea placeholder="Description" value={descInput} onChange={e => setDescInput(e.currentTarget.value)} />
          <Button onClick={handleAddMeal}>Add Meal</Button>
        </Stack>
      </Collapse>
    </Paper>
  )
}

export default Row
