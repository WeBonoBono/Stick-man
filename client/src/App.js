import Login from "./routes/Login";
import Main from './routes/Main'
import ChaosFloor from "./routes/ChaosFloor"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/ChaosFloor" element={<ChaosFloor/>} />
      </Routes>
    </Router>
  );
}

export default App;
