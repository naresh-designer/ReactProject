import React, { useState } from 'react'
import styled from 'styled-components'

const Home = () => {
    const [inputValue,setInputValue]=useState({
        name: '',
        password: '',
        email: '',
        number: ''
    })


    const handleForm = (e) => {
        const {name,value} = e.target
        setInputValue({...inputValue, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }


  return (
    <Section>
            <h1>Welcome to the {inputValue.name}</h1>
            <p>This is a simple React application demonstrating various components.{inputValue.password}</p>
            <p>Use the navigation to explore different features. {inputValue.email}</p>
            <p>Feel free to modify the code and experiment with different functionalities. {inputValue.number}</p>
            <p>Happy coding!</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Name" value={inputValue.name} onChange={handleForm} />
            <input type="password" name='password' placeholder="Passowrd" value={inputValue.password} onChange={handleForm} />
            <input type="email" name='email' placeholder="Email" value={inputValue.email} onChange={handleForm} />
            <input type="number" name='number' placeholder="Number" value={inputValue.number} onChange={handleForm} />
            <button type="submit">Submit</button>
        </form>
    </Section>
  )
}

const Section = styled.section`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    button {
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`

export default Home