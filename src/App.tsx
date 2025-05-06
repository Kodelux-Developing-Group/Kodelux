import "./App.css";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

function App() {
  
  return (
    <Router basename="/Kodelux">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;