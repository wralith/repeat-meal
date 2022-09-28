import { ActionIcon, Button, ColorPicker, DEFAULT_THEME, Popover } from '@mantine/core'
import { IconPalette } from '@tabler/icons'
import { useEffect, useState } from 'react'

import { Meal } from '@/interfaces'
import useMenuStore from '@/stores/menuStore'

interface Props {
  meal: Meal
  dayId: string
}

function SetColor({ meal, dayId }: Props) {
  const changeColor = useMenuStore(state => state.changeColor)
  const [colorValue, setColorValue] = useState('')

  useEffect(() => {
    if (colorValue !== '') {
      changeColor(dayId, meal, colorValue)
    }
  }, [colorValue, setColorValue])

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <ActionIcon variant="default" color="brand">
          <IconPalette />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker
          format="hex"
          value={colorValue}
          onChange={setColorValue}
          withPicker={false}
          fullWidth
          swatches={[...DEFAULT_THEME.colors.red, ...DEFAULT_THEME.colors.green, ...DEFAULT_THEME.colors.blue, ...DEFAULT_THEME.colors.violet]}
        />
      </Popover.Dropdown>
    </Popover>
  )
}

export default SetColor
