import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from "./component/Landing_Page";
import Galeria_Deptos from "./component/Galeria_Deptos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingpage" element={<Landing_Page />}></Route>
        <Route path="/landingpage/galeria" element={<Galeria_Deptos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
