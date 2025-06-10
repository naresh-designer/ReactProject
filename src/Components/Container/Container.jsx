import { Route, Routes } from "react-router-dom"
import IncDec from "../IncDec/IncDec"
import Pagination from "../Pagination/Pagination"
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll"
import LazyLoad from "../LazyLoad/LazyLoad"
import Accordian from "../Accordian/Accordian"
import Todo from "../Todo/Todo"
import Home from "../Home/Home"


const Container = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/incdec" element={<IncDec />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/lazy-load" element={<LazyLoad />} />
        <Route path="/accordian" element={<Accordian />} />    
        <Route path="/todo" element={<Todo />} />   
    </Routes>
    </>
  )
}

export default Container