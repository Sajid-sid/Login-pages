import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";
import ForgetPassword from "./ForgetPassword";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Default route */}
        <Route path="/" element={<Login />} />  

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

      </Routes>
    </Router>
  );
}

export default App;
