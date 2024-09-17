import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import PrivateRoute from "./components/PrivateRoute";
import "./styles/index.css"

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route
            path="/"
             element={
            //  <PrivateRoute>
                <HomePage />
            //  </PrivateRoute>
            }
          />
          <Route path = "/home" element = {<HomePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
