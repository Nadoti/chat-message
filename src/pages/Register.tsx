import { ChangeEventHandler, FormEvent, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { Input } from '../components';

const inputTypes = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'E-mail'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password'
  },
]

interface StateType {
  email: string; 
  password: string;
}

interface ActionType {
  name: string; 
  value: string;
  type: string;
}


interface Type {
  state: StateType
  action: ActionType
}

const initialState: StateType = {
  email: "",
  password: "",
}
function reducer(state: StateType, action: ActionType ): StateType {
  console.log(state)
  console.log(action)
  switch(action.type) {
    case 'change_state': {
      return {
        ...state,
        [action.name]: action.value
      }
    }
    default:
      return state
  }
}

export default function Register() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function createNewUser(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('user', user)
      })
      .catch((error) => {
        //const errorCode = error.code
        const errorMessage = error.message
        console.log('errorMessage', errorMessage)
      })
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    dispatch({ name: event.target.name, value: event.target.value, type: 'change_state'})
  }

  return (
    <main className='bg-[#18171A] w-full h-screen flex justify-center items-center'>
      <form onSubmit={createNewUser} className='flex flex-col gap-5 shadow-2xl w-[30rem] p-16 rounded-xl'>
        <h1 className='text-white text-3xl text-center mb-6'>Register a new Account</h1>
        {inputTypes?.map(value => (
          <Input
            key={value.name}
            name={value.name}
            type={value.type}
            placeholder={value.placeholder}
            onChange={handleChange}
            value={state[value.name as keyof StateType]}
          />
        ))}

        <button className='bg-[#35333D] py-2 text-slate-100 rounded-xl transition hover:brightness-90' type='submit'>Sign Up</button>
        <span className='text-gray-500'>Already have an account ? <Link to='/' className='text-slate-400 hover:underline'>Click here</Link></span>
      </form>
    </main>
  )
}
