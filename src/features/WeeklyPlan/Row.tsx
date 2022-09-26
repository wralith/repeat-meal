import { Day, Meal } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import { ActionIcon, Button, createStyles, Group, Paper, ScrollArea, Space, TextInput, Title } from '@mantine/core'
import { IconX } from '@tabler/icons'
import { useEffect, useState } from 'react'
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
  let newMeal: Meal

  useEffect(() => {
    newMeal = {
      name: mealInput,
      isDone: false
    }
  }, [mealInput])

  return (
    <Paper shadow="sm" p="lg">
      <Group position="apart" style={{ width: '100%' }}>
        <Title order={2}>{day.name}</Title>
        <ActionIcon onClick={() => removeDay(day.name)}>
          <IconX />
        </ActionIcon>
      </Group>
      <Space h="sm" />
      <Group>
        <TextInput placeholder="Meal Name" value={mealInput} onChange={e => setMealInput(e.currentTarget.value)} />
        <Button onClick={() => addMeal(day.name, newMeal)}>Add Meal</Button>
      </Group>

      <Space h="sm" />

      <ScrollArea>
        <Group className={classes.itemGroup}>
          {day && day.name && day.meals.map(meal => <Item day={day.name} key={meal.name} meal={meal} />)}
        </Group>
      </ScrollArea>
    </Paper>
  )
}

export default Row
