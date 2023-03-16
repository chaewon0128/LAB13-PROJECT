import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Header/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
