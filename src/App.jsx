import { ThemeProvider } from "styled-components"
import GlobalStyle from "./assets/Style/GlobalStyle"
import { BrowserRouter } from "react-router-dom"
import Container from "./Components/Container/Container"
import Nav from "./Components/Nav/Nav"
import ScrollTop from "./Components/ScrollTop/ScrollTop"


const App = () => {
  const theme = {
    colors: {
      primary: '#0070f3',
      secondary: '#1db954',
      background: '#f0f0f0',
      text: '#333',
    },
    fonts: {
      body: "Josefin Sans",
    },
    mobile: {
      maxWidth: '768px',
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
      <Nav />
      <Container />
      <ScrollTop/>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App