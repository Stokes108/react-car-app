// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar"
import {useState} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import routes from './config/routes'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const handleOpen = () => {
    setIsVisible(true)
  }
  const handleClose = () => {
    setIsVisible(false)
  }



  return (

    <BrowserRouter>  
      <div  onMouseOver= {handleClose}>

        <Navbar
          open = {isVisible}
          onClose = {handleClose}
          onOpen = {handleOpen}
        />
        <div className ='bg-gray-500 h-screen'>
        <Routes>
            
                { routes.map((route, index) => (
                <Route
                  key = {index}
                  path = {route.path}
                  element = {<route.component/>}
                  />
                    ))}
        </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
