
import styled from 'styled-components'

const Card = ({result}) => {
  return (
    <Section>


        <div className='input__listing'>
          {
            result.map((curElm)=>{
              return (
                <div className='card' key={curElm.id}>
                  <h2>{curElm.name}</h2>
                </div>
              )
            })
          }
        </div>
        
    </Section>
  )
}

const Section = styled.section`
  
  background-color: red;
  border-radius: 8px;
  
  .input__listing {
    display: flex;
    flex-direction: column;
    
  }
  
  .card {
    background-color: #e9e9e9;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    margin: 30px 30px 0 30px;
  }
    card:last-child {
      margin-block-end: 30px;
    }`

export default Card