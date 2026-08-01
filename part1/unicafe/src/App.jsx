import { useState } from "react"
import Header from "./Header"
import Buttons from "./Buttons"
import Statistics from "./Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(prev => prev + 1)
  const handleNeutral = () => setNeutral(prev => prev + 1)
  const handleBad = () => setBad(prev => prev + 1)

  return (
    <div>
      <Header header="give feedback" />
      <Buttons 
        handleGood={ handleGood }
        handleNeutral={ handleNeutral }
        handleBad={ handleBad }
      />
      <Statistics
        good={ good }
        neutral={ neutral }
        bad={ bad }
      />
    </div>
  )
}

export default App
