import { useEffect, useState } from "react"


const ScrollTop = () => {
  const[isVisible, setIsVisible] = useState(false)


  const handleClickScrollTop = ( )=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  const handleChangeVisibility = () => {
    if(window.scrollY > 300){
      setIsVisible(true)
    }
    else{
      setIsVisible(false)
    }
  }


  useEffect(()=>{
    window.addEventListener('scroll',handleChangeVisibility)
    return () => {
      window.removeEventListener('scroll', handleChangeVisibility)
    }
  })


  return (
    <div className="scroll-top">
     { isVisible &&  <button
        className="scroll-top-button"
        onClick={()=>handleClickScrollTop()}
      >
        Scroll to Top
      </button>}
      <style jsx>{`
        .scroll-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .scroll-top-button {
          padding: 10px 15px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .scroll-top-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  )
}

export default ScrollTop