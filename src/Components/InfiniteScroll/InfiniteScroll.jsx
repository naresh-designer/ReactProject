import {  useEffect, useState } from "react"
import styled from "styled-components"


const InfiniteScroll = () => {

  const [pokemon,setPokemon] = useState([])
  const [search, setSearch] = useState('')
  const [ offset, setOffset] = useState(0)

  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=6&offset=${offset}`

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

        const showResult = await Promise.all(pokemonResult)
        setPokemon((prev)=>[...prev, ...showResult]);

      } catch (error) {
        console.log(error);
        
      }
    }

    fetchData()

  },[offset])

  // Filter pokemon based on search input
  const filterdPokemon = pokemon.filter((curElm)=>{
    return curElm.name.toLowerCase().includes(search.toLowerCase())
  })


  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight


    if(scrollTop + windowHeight >= documentHeight){
      setOffset(prev => prev + 6)
    }
  }


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])



  return (
    <Section>
      <h1>Infinite Scroll</h1>
      <p>This component allows you to load more items as you scroll down.</p>

      <div className="searchPokemon">
        <input type="text" placeholder="Search Pokemon..." value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>

       <div className="grid grid_three">

        {
          filterdPokemon.map((curElm)=>{
            return(
              <div key={curElm.id} className="card">
                <img className="img" src={curElm.sprites.other.dream_world.front_default} alt={curElm.name} />
                <h3>{curElm.name}</h3>
                <p>Height: {curElm.height} </p>
                <p>Weight: {curElm.weight}</p>
                <p>Types: {curElm.types.map((curType)=> curType.type.name).join(', ')}</p>
              </div>
            )
          })
        }
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
        padding: 20px;
        text-align: center;
        margin-block-start: 30px;
    }

    .img{
      width:200px;
      height:200px;
    }

    .searchPokemon{
      display: flex;
      justify-content: center;
      margin-block-start: 20px;
    }
    
    .searchPokemon input{
      padding: 10px;
      border: 1px solid #ccc;
      width: 400px;
      height: 50px;
    }

        `

export default InfiniteScroll