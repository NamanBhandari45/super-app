import './App.css';
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Genre from './Pages/genre'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path='/genre' element={<Genre />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
