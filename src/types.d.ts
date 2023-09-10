import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
    fromLenguage: string;
    toLenguage: string;
    fromText: string;
    result: string;
    loading: boolean;
}

export type Action = 
    | { type: 'SET_FROM_LENGUAGE', payload: string }
    | { type: 'INTERCHANGE_LENGUAGES' }
    | { type: 'SET_TO_LENGUAGE', payload: string }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }
