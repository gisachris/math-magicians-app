import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppHolder from './components/calculator';
import Quote from './components/quote';
import HomePage from './components/home';
import Navigator from './components/Navigation';
import NotFound from './components/Notfound';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<AppHolder />} />
        <Route path="/quotes" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
