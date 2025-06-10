import React, { useState } from 'react'
import styled from 'styled-components'
import { accordianApi } from '../Accordian/accordianApi'

const Accordian = () => {

  const [faq, setFaq] = useState(false)

  const handleClick = (id) => {
    if(faq === id){
      return setFaq(false)
    }
    setFaq(id)
  }

  return (
     <Section>
          <h1>Accordian Component</h1>
          <p>This is a simple accordian component.</p>
          <div className="wrapper">
            <div className="grid grid_three">
              {
                accordianApi.map((curElm,id)=>{
                  return (
                    <div key={id} className={faq === id ? 'card card-blue' : 'card'} onClick={()=> handleClick(id)}>
                      <h2 >{curElm.title}</h2>
                      <p className={faq === id ? 'show' : 'hide'}>{curElm.content}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Section>
  )
}

const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .wrapper {
    max-width: 1200px;
    margin: auto;
  }

  .grid {
    display: grid;
    gap: 30px;
  }

  .grid_three {
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    background-color: #e9e9e9;
    padding: 30px;
    text-align: center;
    border-radius: 8px;

    h2 {
      margin-bottom: 10px;
    }
    
    p {
      color: #555;
    }
      .hide{
      display:none;
      }
  }
      .card-blue{
      background-color: blue;
      }
`

export default Accordian