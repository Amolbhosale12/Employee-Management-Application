import "./App.css";
import ListEmployee from "./Components/ListEmployee";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddEmployee from "./Components/AddEmployee";
import UpdateEmployee from "./Components/UpdateEmployee"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path={"/"}>
              <Route index element={<ListEmployee/>}></Route>
              <Route path={"add"} element={<AddEmployee/>}></Route>
              <Route path={"update/:id"} element={<UpdateEmployee/>}></Route>
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
