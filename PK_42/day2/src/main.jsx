import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import App from './App';
import App2 from './App2.jsx';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/App2" element={<App2 />} />
      </Routes>
    </BrowserRouter>
  );
}
