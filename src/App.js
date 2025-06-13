import Introduction from './components/Introduction';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Testing from './components/Testing';
import Result from './components/Result';
import Select from './components/Select';
import Summary from './components/Summary';
import Camera from './components/Camera'
import Capture from './components/capture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/result' element={<Result />} />
        <Route path='/select' element={<Select />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/camera' element={<Camera />} />
        <Route path="/camera/capture" element={<Capture />} />
      </Routes>
    </Router>
  );
}

export default App;
