import styled from "styled-components"
import { navData } from "./navData"
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <MainNav>
        <ul>
            {
                navData.map((curElm)=>{
                    const { title, path } = curElm;
                    return(
                        <li key={curElm.id}>
                            <NavLink className={({isActive})=>isActive ? 'active': ''} to={path}>{title}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </MainNav>
  )
}

const MainNav = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
    padding-block: 1rem;
    
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
        padding: 0;
    
        li {
        a {
            color: white;
            text-decoration: none;
            font-family: ${({ theme }) => theme.fonts.body};
            font-size: 1.2rem;
            position: relative;

            &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: white;
            transition: all 0.3s ease;
            scale: 0;
            }

            &:hover::after {
            scale: 1;
            }
        }
        }
    }
    
    .active {
        color:${({theme})=>theme.colors.background}
    }
`

export default Nav