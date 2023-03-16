import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RenderMainSlide from '@components/RenderMainSlide/RenderMainSlide';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<RenderMainSlide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
