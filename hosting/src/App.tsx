import { useState } from 'react'
import { Card } from '@mantine/core'
import './App.css'

function App() {

  const [response, setResponse] = useState<string | null>(null)

  return (
    <>
      <Card>
        <Card.Section>
          <h1>Response</h1>
          <p>{response}</p>
        </Card.Section>
      </Card>
    </>
  )
}

export default App
