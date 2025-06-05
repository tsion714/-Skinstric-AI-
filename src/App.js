import Introduction from './components/Introduction';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Testing from './components/Testing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
