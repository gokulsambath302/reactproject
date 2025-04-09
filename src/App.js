import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Log from "./log";
import Thank from "./thank";
import Registration from "./registration";
import Loginform from "./loginform";
import Forget from "./forget";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App" id="maindiv">
   <BrowserRouter>
        <Routes>
          <Route path="" element={<Loginform />}/>
          <Route path="/Nav" element={<Nav />}/>
          <Route path="/Registration" element={<Registration />}/>
          <Route path="/Loginform" element={<Loginform />}/>
          <Route path="/Thank" element={<Thank />}/>
          <Route path="/Forget" element={<Forget />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
