
import './App.css'
import { useMultistepForm } from './useMultistepForm.tsx';
import { UserForm } from './UserForm.tsx';
import { AddressForm } from './AddressForm.tsx';
import { AccountForm } from './AccountForm.tsx';
import { FormEvent, useState } from 'react';
type FormData={
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",

}
function App() {

const [data, setData] = useState(INITIAL_DATA);

function updateFields(fields: Partial<FormData>){
  setData( prev => {
    return{...prev, ...fields}
  })
}

  function onSubmit(e: FormEvent){
    e.preventDefault();
    if(!isLastStep) return next()
    alert('Successful Account Creation');
  }

  const {step, steps, currentStepIndex, isFirstStep, isLastStep, next, back } = useMultistepForm([
  <UserForm {...data } updateFields={updateFields}/>,
  <AddressForm {...data } updateFields={updateFields}/>,
  <AccountForm {...data } updateFields={updateFields}/>
]);
  return (<div style={{
    position: 'relative',
    background: 'white',
    border: '1px solid black',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '.5rem',
    fontFamily: 'Arial',
    maxWidth:'max-content',
    }}>
    < form onSubmit={onSubmit}>
      <div style={{
        position: 'absolute',
        top: '.5rem',
        right: '.5rem',

      }}>{currentStepIndex + 1}/{steps.length}</div>
    {step}
    <div style={{
      marginTop: '1rem',
      display: 'flex',
      gap: '.5rem',
      justifyContent: 'flex-end'
      }}
      >
        {!isFirstStep &&
        <button type="button" onClick={back}>Back</button>
        }
        <button type="submit" onClick={next}>{isLastStep? "Finish": "Next"}</button>
        
    </div>
    </form>
    </div>)
}

export default App
