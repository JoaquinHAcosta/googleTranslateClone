import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { Action, type State } from './types.d'

const initialState: State = {
  fromLenguage: 'auto',
  toLenguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = ( state: State, action: Action ) => {
  const { type } = action

  switch ( type ) {
    case 'INTERCHANGE_LENGUAGES':
      return {
        ...state,
        fromLenguage: state.toLenguage,
        toLenguage: state.fromLenguage
      }
    case 'SET_FROM_LENGUAGE':
      return {
        ...state,
        fromLenguage: action.payload
      }
    case 'SET_TO_LENGUAGE':
      return {
        ...state,
        toLenguage: action.payload
      }
    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload
      }
    case 'SET_RESULT':
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    default:
      return { ...state }
  }
}

function App() {
  const [{
    fromLenguage,
    toLenguage,
    fromText,
    result,
    loading
  }, dispatch] = React.useReducer(reducer, initialState)
  
  
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({ type: 'SET_FROM_LENGUAGE', payload: 'es'})
      }}>Change to spanish</button>
    </>
  )
}

export default App
