import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import CreateContact from "./pages/Cadastrar/cadastrar";
import EditContact from "./pages/Editar/editar";
import Home from "./pages/Home/home";

function App() {
    return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/createContact" element={<CreateContact />}/>
                <Route path="/editContact/:id" element={<EditContact />}/>
          </Routes>
      </BrowserRouter>
    )
}

export default App;
