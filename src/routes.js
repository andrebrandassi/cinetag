import Inicio from "pages/Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes