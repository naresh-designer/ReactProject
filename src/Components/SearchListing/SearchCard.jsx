import React, { useState } from 'react'
import styled from 'styled-components'

const SearchCard = ({setResult}) => {
    const [search, setSearch] = useState('')
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20'

    

        const fetchData = async (value) => {
            const res = await fetch(apiUrl)
            const data = await res.json()

            const pokemonResult = data.results.map(async(curElm)=>{
                const res = await fetch(curElm.url)
                const data = await res.json()
                return data
            })

            const showResult = await Promise.all(pokemonResult)
            
            const filteredResult = showResult.filter((curElm) => value&&curElm.name.toLowerCase().includes(value.toLowerCase()))
            setResult(filteredResult);
            
        }


    const handleSearch = (value) => {
        setSearch(value)
        fetchData(value)
    }

  return (
    <Section>
        <div className='input__Section'>
          <input type="text" placeholder='Search' value={search} onChange={(e) => handleSearch(e.target.value)} />
        </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  .input__Section {
    display: flex;
    gap: 10px;
    margin-block-start: 20px;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    display: block;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }`

export default SearchCard