import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './common_files/Header.jsx'
import Home from './common_files/Home.jsx'
import About from './common_files/About.jsx'
import Resume from './common_files/Resume.jsx'
import Mywork from './common_files/Mywork.jsx'
import Contact from './common_files/Contact.jsx'
import Footer from './common_files/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header></Header>
    <Home></Home>
    <About></About>
    <Resume></Resume>
    <Mywork></Mywork>
    <Contact></Contact>
    <Footer></Footer>
  </StrictMode>,
)
