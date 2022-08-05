import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Navbar from './components/Navbar';
import Form from './page/Form';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  )
}

