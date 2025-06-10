import { useState } from "react"
import styled from "styled-components"


const IncDec = () => {
  const [count,setCount] = useState(0)
  return (
    <Section>
      <h1>Inc/Dec</h1>

      <div>
        <h1>Increment Decrement Component</h1>
        <p>This component allows you to increment or decrement a value.</p>
        <div className="counter">
            <button className="decrement" onClick={()=> count > 0 && setCount(count - 1)} >-</button>
            <span className="value">{count}</span>
            <button className="increment" onClick={()=> setCount(count + 1)} >+</button>
        </div>
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

    .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-block-start: 20px;

        button {
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
        }

        .value {
            font-size: 24px;
            background-color: #0070f3;
            color: #fff;
            padding: 3px 20px;
        }
    }`

export default IncDec