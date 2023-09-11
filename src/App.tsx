import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App() {

  const { 
    fromLenguage, 
    toLenguage, 
    fromText, 
    result, 
    loading,
    setFromLenguage, 
    setToLenguage, 
    interchangeLenguages, 
    setFromText, 
    setResult 
  } = useStore()

  return (
    <Container fluid={true}>
      <h2>Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>

          <LanguageSelector
          type={SectionType.From}
          value={fromLenguage} 
          onChange={setFromLenguage}
          />
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLenguage === AUTO_LANGUAGE} onClick={interchangeLenguages}>
            <ArrowsIcon/>
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector 
            type={SectionType.To}
            value={toLenguage}
            onChange={setToLenguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
