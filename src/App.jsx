import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header/Header';
import RenderMainSlide from '@components/RenderMainSlide/RenderMainSlide';

function App() {
  // const [count, setCount] = useState(0);

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
