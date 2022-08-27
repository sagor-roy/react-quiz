import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Quiz from "./component/pages/Quiz";
import Register from "./component/pages/Register";
import Result from "./component/pages/Result";
import Layouts from "./component/partials/Layouts";
import Navbar from "./component/partials/Navbar";
// import PrivateRoute from "./component/PrivateRoute";
// import PublicRoute from "./component/PublicRoute";
import PrivateOutlet from "./component/PrivateOutlet";
import PublicOutlet from "./component/PublicOutlet";
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
            {/* <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            /> */}
            {/* <Route
              path="/result"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            /> */}
            <Route path="/*" element={<PublicOutlet />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="result" element={<Result />} />
              <Route path="quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </Router>
      </Layouts>
    </AuthProvider>
  );
}

export default App;
