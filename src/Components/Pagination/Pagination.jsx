import { useEffect, useState } from "react"
import styled from "styled-components"


const Pagination = () => {

  const [pokemon,setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=72`

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()

        const pokemonResult = data.results.map(async(curElm)=>{
          const res = await fetch(curElm.url)
          const data = await res.json()
          return data
        })

        const showResult = await Promise.all (pokemonResult)
        setPokemon(showResult);
        setTotalItems(Math.ceil(showResult.length / 6))
        
      } catch (error) {
        console.log(error);
        
      }
    }

    fetchData()
  },[])

  // Set the total number of items
  const itemsPerPage = 6
  const indexPage = (currentPage - 1) * itemsPerPage
  const endIndex = indexPage + itemsPerPage
  const showItemsPage = pokemon.slice(indexPage,endIndex)

  // Handle page number click
  const handleNumber = (index) => {
    setCurrentPage(index)
  }

  // Handle previous button click
  const handlePrev = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  // Handle next button click
  const handleNext = () => {
    if(currentPage < totalItems){
      setCurrentPage(currentPage + 1)
    }
  }


  return (
    <Section>
      <h1>Pagination Component</h1>
      <div className="grid grid_three">

        {
          showItemsPage.map((curElm)=>{
            return(
              <div key={curElm.id} className="card">
                <img className="img" src={curElm.sprites.other.dream_world.front_default} alt={curElm.name} />
                <h3>{curElm.name}</h3>
                <p>Height: {curElm.height} </p>
                <p>Weight: {curElm.weight}</p>
              </div>
            )
          })
        }
      </div>

      <div className="pagination">
        <button disabled={currentPage ===  1} onClick={()=> handlePrev()}>Prev</button>
        {
          Array.from({length:totalItems},(_,i)=>{
            return(
              <span className={currentPage === i+1 ? 'number active' : 'number'} key={i} onClick={()=> handleNumber(i+1)}>{i + 1}</span>
            )
          })
        }
          
        <button disabled={currentPage === totalItems} onClick={()=>handleNext()}>Next</button>
      </div>
    </Section>
  )
}

const Section = styled.section`
    padding: 20px;
    border-radius: 8px;
    max-width: 1200px;
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

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .card {
        background-color: #f9f9f9;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
    }

    .card h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .card p {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .img{
        width: 100px;
        aspect-ratio: 1;
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        gap: 10px;    
        button {
          padding: 10px 15px;
          font-size: 18px;
          cursor: pointer;
        }


    .number {
      cursor: pointer;
      padding: 10px 15px;
      font-size: 18px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 0 5px;
    }

        .active {
          background-color: #0070f3;
          border-color: #0070f3;
          color: #fff;
        }

        .disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

        
    `

export default Pagination