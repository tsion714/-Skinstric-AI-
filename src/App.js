import Introduction from './components/Introduction';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
