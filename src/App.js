import Introduction from './components/Introduction';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Testing from './components/Testing';
import Result from './components/Result';
import Select from './components/Select';
import Summary from './components/Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/result' element={<Result />} />
        <Route path='/select' element={<Select />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
