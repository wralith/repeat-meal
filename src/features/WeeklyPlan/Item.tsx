import { ActionIcon, Chip, Code, createStyles, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { IconX } from '@tabler/icons'

import { Meal } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'
import { hourAndMinute } from '@/utils/time'

const useStyles = (isDone: boolean) =>
  createStyles(theme => ({
    item: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      minWidth: '18rem',
      width: 'max-content',
      height: '14rem',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
      opacity: isDone ? '70%' : '100%',
      justifyContent: 'space-between'
    }
  }))()

interface Props {
  meal: Meal
  dayId: string
}

function Item({ meal, dayId }: Props) {
  const { classes } = useStyles(meal.isDone)
  const removeMeal = useMenuStore(state => state.removeMeal)
  const toggleIsDone = useMenuStore(state => state.toggleIsDone)

  const time = new Date(meal.time)
  const plannedTime = hourAndMinute(time)

  return (
    <Paper className={classes.item} shadow="sm" radius="md" p="md">
      <Stack align="flex-start" justify="flex-start" spacing="xs">
        <Group position="apart" style={{ width: '100%' }}>
          <Code>{plannedTime}</Code>
          <ActionIcon onClick={() => removeMeal(dayId, meal.id)}>
            <IconX />
          </ActionIcon>
        </Group>
        <Title order={4}>{meal.name}</Title>
        <Text style={{ maxWidth: '24rem' }} size="sm">
          {meal.description}
        </Text>
      </Stack>
      <Chip
        style={{ alignSelf: 'end' }}
        checked={meal.isDone}
        onClick={() => toggleIsDone(dayId, meal)}
        variant="filled"
      >
        Done
      </Chip>
    </Paper>
  )
}

export default Item
