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
  const {type} = action
  if(type === 'INTERCHANGE_LANGUAGES'){
    return{
      ...state,
      fromLanguaje: state.toLanguage,
      toLanguage: state.fromLanguaje
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
