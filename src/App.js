import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Quiz from "./component/pages/Quiz";
import Register from "./component/pages/Register";
import Result from "./component/pages/Result";
import Layouts from "./component/partials/Layouts";
import Navbar from "./component/partials/Navbar";
// import PrivateRoute from "./component/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

function App() {
  return (
    <AuthProvider>
      <Layouts>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/result" element={<Result />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
      </Layouts>
    </AuthProvider>
  );
}

export default App;
