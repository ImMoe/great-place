// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Pages
import Add from "./pages/Add"
import Index from "./pages/Index"
import Show from "./pages/Show"
// Components
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
