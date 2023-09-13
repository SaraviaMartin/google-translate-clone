import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useReducer } from 'react';

//1. Create a initial State
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

//Create a reducer
function reducer (state, action) {
  const {type, payload} = action
  if(type === 'INTERCHANGE_LANGUAGES'){
    return{
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if(type === 'SET_FROM_LANGUAGE'){
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if(type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if(type === 'SET_FROM_TEXT' ){
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT'){
    return {
      ...state,
      loading: false,
      result: payload
    }
  }
  return state
}

function App() {
//3. Usar UseReducer
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Google Translate</h1>
    </>
  )
}

export default App
