import { Meal } from '@/interfaces'
import useHistoryStore from '@/stores/history'
import { ActionIcon, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { IconX } from '@tabler/icons'


// TODO: Populate inputs or add meal directly to the selected day
// TODO: Better state management
// TODO: For mobile apps!!
function History() {
  const { history, removeMeal } = useHistoryStore()

  return (
    <Paper shadow="md" p="lg" style={{ width: '100%' }}>
      <Stack>
        <Title order={2}>History</Title>
        {history.map(meal => (
          <HistoryItem meal={meal} removeMeal={removeMeal} key={meal.id} />
        ))}
      </Stack>
    </Paper>
  )
}

function HistoryItem({ meal, removeMeal }: { meal: Meal; removeMeal: any }) {
  return (
    <Paper withBorder p="sm">
      <Group position='apart'>
        <Text>{meal.name}</Text>
        <ActionIcon onClick={() => removeMeal(meal.name)}>
          <IconX />
        </ActionIcon>
      </Group>
    </Paper>
  )
}

export default History
