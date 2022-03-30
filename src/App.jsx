import './App.css'
import { Button, Tab } from 'react-bootstrap'
import { useState } from 'react'
import Calculator from './components/Calculator'
import ResultPage from './components/ResultPage/ResultPage'

function App() {

  const [activeKey, setActiveKey] = useState("form")
  const [values, setValues] = useState({})

  const goForm = () => setActiveKey("form")
  const goResult = (vals) => {
    setValues(vals)
    setActiveKey("result")
  }

  return (
    <Tab.Container activeKey={activeKey} onSelect={(value) => setActiveKey(value)}>
      <Tab.Content>
        <Tab.Pane eventKey="form">          
          <Calculator onSubmit={goResult} />
        </Tab.Pane>
        <Tab.Pane eventKey="result" mountOnEnter>
          <ResultPage values={values} onBack={goForm} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default App;
