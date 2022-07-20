import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
