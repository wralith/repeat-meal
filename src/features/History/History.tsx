import { Meal } from '@/interfaces'
import useHistoryStore from '@/stores/history'
import { ActionIcon, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { IconPlus, IconX } from '@tabler/icons'

// TODO: Populate inputs or add meal directly to the selected day
// TODO: Better state management
// TODO: For mobile apps!!
function History() {
  const { history, removeMeal } = useHistoryStore()

  return (
    <Paper shadow="md" p="lg" style={{ width: '100%' }}>
      <Stack>
        <Title order={2}>History</Title>
        {history.length > 0 ? (
          history
            .slice(0)
            .reverse()
            .map(meal => <HistoryItem meal={meal} removeMeal={removeMeal} key={meal.id} />)
        ) : (
          <Text>History is empty for now! 🦊</Text>
        )}
      </Stack>
    </Paper>
  )
}

function HistoryItem({ meal, removeMeal }: { meal: Meal; removeMeal: any }) {
  // TODO: Implement add meal from history to selected day.
  // const handleAdd = () = {}

  return (
    <Paper withBorder p="sm">
      <Group position="apart">
        <Text>{meal.name}</Text>
        <Group>
          <ActionIcon color='green' onClick={() => {}}>
            <IconPlus />
          </ActionIcon>
          <ActionIcon color='red' onClick={() => removeMeal(meal.name)}>
            <IconX />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  )
}

export default History
