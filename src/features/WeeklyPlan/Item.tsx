import { Meal } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import { ActionIcon, Checkbox, Chip, Code, createStyles, Group, Paper, Space, Stack, Text, Title } from '@mantine/core'
import { IconX } from '@tabler/icons'

const useStyles = (isDone: boolean) => createStyles(theme => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    minWidth: '18rem',
    height: '12rem',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    opacity: isDone ? '70%' : '100%',
    justifyContent: 'space-between'
  }
}))()

interface Props {
  meal: Meal
  day: string
}

function Item({ meal, day }: Props) {
  const { classes } = useStyles(meal.isDone)
  const removeMeal = useMenuStore(state => state.removeMeal)
  const toggleIsDone = useMenuStore(state => state.toggleIsDone)

  return (
    <Paper className={classes.item} shadow="sm" radius="md" p="lg">
      <Stack align="flex-start" justify="flex-start" spacing="xs">
        <Group position="apart" style={{ width: '100%' }}>
          <Code>00:00</Code>
          <ActionIcon onClick={() => removeMeal(day, meal.name)}>
            <IconX />
          </ActionIcon>
        </Group>
        <Title order={4}>{meal.name}</Title>
        <Text>{meal.description}</Text>
      </Stack>
      <Chip checked={meal.isDone} onClick={() => toggleIsDone(day, meal)} variant="filled">
        Done
      </Chip>
    </Paper>
  )
}

export default Item
