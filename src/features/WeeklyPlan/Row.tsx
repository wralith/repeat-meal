import { ActionIcon, Button, createStyles, Group, Paper, ScrollArea, Space, TextInput, Title } from '@mantine/core'
import { IconX } from '@tabler/icons'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Day, Meal } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import Item from './Item'

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

  const [mealInput, setMealInput] = useState('')

  const handleAddMeal = () => {
    if (mealInput.length > 0) {
      const newMeal: Meal = {
        id: uuid(),
        name: mealInput,
        isDone: false
      }

      addMeal(day.id, newMeal)
      setMealInput('')
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
      <Group>
        <TextInput placeholder="Meal Name" value={mealInput} onChange={e => setMealInput(e.currentTarget.value)} />
        <Button onClick={handleAddMeal}>Add Meal</Button>
      </Group>

      <Space h="sm" />

      <ScrollArea>
        <Group className={classes.itemGroup}>
          {day && day.name && day.meals.map(meal => <Item dayId={day.id} key={meal.id} meal={meal} />)}
        </Group>
      </ScrollArea>
    </Paper>
  )
}

export default Row
