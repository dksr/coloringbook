import type { NextApiRequest, NextApiResponse } from 'next'

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const messageHistory: Message[] = []

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Добавляем новое сообщение пользователя в историю
      messageHistory.push({
        role: 'user',
        content: req.body.message,
      })

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messageHistory, // Отправляем всю историю
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch OpenAI')
      }

      const data = await response.json()
      const reply = data.choices[0].message.content.trim()

      // Добавляем ответ ассистента в историю
      messageHistory.push({
        role: 'assistant',
        content: reply,
      })

      res.status(200).json({ reply })
    } catch (error) {
      res.status(500).json({ message: (error as any).message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
