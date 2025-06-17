import React, { useState } from 'react'
import styled from 'styled-components'
import SearchCard from './SearchCard'
import Card from './Card'

const SearchListing = () => {
  const [result, setResult] = useState([])
  return (
    <Section>
      <div className='input'>
        <h1>SearchListing</h1>
        <p>This is a simple search listing component.</p>
        <SearchCard setResult={setResult}/>
        <Card result={result}/>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  p {
    text-align: center;
    font-size: 18px;
    color: #333;
  }
  
  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-block-start: 20px;
  }`

export default SearchListing