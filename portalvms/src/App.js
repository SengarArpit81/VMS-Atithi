import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Menubar from './Components/Navbar/Menubar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h2>VMS-Athithi</h2>
       <Menubar/> 

       <BrowserRouter>
       <Routes>
        <Route  exact path="/signin"  element={<Signin/>}/>
        <Route exact path="/signup"  element={<Signup/>}/>

       </Routes>
       </BrowserRouter>
      {/* 
      <Signup/> */}
    </div>
  );
}

export default App;
