import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  

  async function handleForm(e) {
e.preventDefault()
    const uData = await {
      name: name,
      email: email
    }
    console.log(uData);
    const response = await axios.post(`http://localhost:3000/login/${uData}`)
    console.log(response);
  }

  

  return (
    <>
      <form onSubmit={handleForm}>
        <label>Name:
        <input value={name} onChange={(e) => {setName(e.target.value)}}  />
        </label>

        <label>email:
        <input value={email} onChange={(e) => {setEmail(e.target.value)}}  />
        </label>

        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
