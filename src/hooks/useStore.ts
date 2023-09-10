import { AUTO_LANGUAGE } from '../constants'
import { Action, FromLanguage, Language, type State } from '../types.d'
import React from 'react'

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
        if(state.fromLenguage === AUTO_LANGUAGE) return state
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

export function useStore () {
    const [{
        fromLenguage,
        toLenguage,
        fromText,
        result,
        loading
    }, dispatch] = React.useReducer(reducer, initialState)
    
    const interchangeLenguages = () => {
        dispatch({ type:'INTERCHANGE_LENGUAGES' })
    }

    const setFromLenguage = (payload: FromLanguage) => {
        dispatch({ type:'SET_FROM_LENGUAGE', payload })
    }

    const setToLenguage = (payload: Language) => {
        dispatch({ type:'SET_TO_LENGUAGE', payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type:'SET_FROM_TEXT', payload })
    }

    const setResult = (payload: string) => {
        dispatch({ type:'SET_RESULT', payload })
    }

    return {
        fromLenguage,
        toLenguage,
        fromText,
        result,
        loading,
        interchangeLenguages,
        setFromLenguage,
        setToLenguage,
        setFromText,
        setResult
    }
}