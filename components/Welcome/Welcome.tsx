import { Text, Title } from '@mantine/core'

export function Welcome() {
  return (
    <>
      <Title ta="center" mt={100}>
        Добро пожаловать в{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Coloring Book
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} px={10} mx="auto" mt="xl">
        Введите запрос в поле ниже и мы сгенерируем для вас картинку,
        которую вы сможете распечатать и раскрасить.
      </Text>
    </>
  )
}
