import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import ScrollToTop from "./components/ScrollTop";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
