'use client'

import { useState } from 'react'

import { Button, Flex, Textarea } from '@mantine/core'

const InputText = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    // Обработка значения inputValue
    console.log(inputValue)
  }

  return (
    <Flex
      my="xl"
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <Textarea
        w={{ base: 370, lg: 500 }}
        style={{ maxWidth: '94%' }}
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        placeholder="Введите текст"
      />
      <Button onClick={handleSubmit}>Отправить</Button>
    </Flex>
  )
}

export default InputText
