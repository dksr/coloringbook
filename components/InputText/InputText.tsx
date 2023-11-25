'use client'

import { useState } from 'react'

import { Button, Flex, Loader, Text, Textarea } from '@mantine/core'

const InputText = () => {
  const [inputValue, setInputValue] = useState('')
  const [chatGptResponse, setChatGptResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setChatGptResponse(data.reply)
    } catch (error) {
      console.error('Ошибка при получении ответа от ChatGPT:', error)
    } finally {
      setIsLoading(false)
    }
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
      <Button variant="gradient" gradient={{ from: 'pink', to: 'yellow' }} onClick={handleSubmit}>Отправить</Button>
      {isLoading && <Loader />}
      {chatGptResponse && <Text>{chatGptResponse}</Text>}
    </Flex>
  )
}

export default InputText
