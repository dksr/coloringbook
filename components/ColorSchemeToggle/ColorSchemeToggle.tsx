'use client'

import { Button, Group, Text, useMantineColorScheme } from '@mantine/core'

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <>
      <Text c="dimmed" ta="center" size="lg">Выберите тему:</Text>
      <Group justify="center" mt="xl">
        <Button onClick={() => setColorScheme('light')} color="yellow" variant="outline">Светлая</Button>
        <Button onClick={() => setColorScheme('dark')} variant="outline" color="grey">Темная</Button>
      </Group>
    </>
  )
}
