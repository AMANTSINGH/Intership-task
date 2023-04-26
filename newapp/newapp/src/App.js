import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SampleData from './components/SampleData';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<SampleData />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
