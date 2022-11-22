import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import Menubar from "./Components/Navbar/Menubar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footermain from "./Components/Footer/Footermain";
import Layoyt from "./Components/Home/Layoyt";

// https://doccure-react.dreamguystech.com/template/login#0

function App() {
  return (
    <>
      <div>
      <Menubar />
      </div>
      <div >
        
          <Routes>
            <Route exact path="/" element={<Layoyt />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        
        <Footermain/>
      </div>
    </>
  );
}

export default App;
