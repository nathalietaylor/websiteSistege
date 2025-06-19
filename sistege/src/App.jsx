// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lideranca from "./pages/Lideranca";
import Treinamentos from "./pages/Treinamentos";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lideranca" element={<Lideranca />} />
          <Route path="/treinamentos" element={<Treinamentos />} />
        </Route>
      </Routes>
    </Router>
  );
}
