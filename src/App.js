import './App.css';
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
