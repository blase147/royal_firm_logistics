// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import HomePage from './components/homepage/homepage';
import backgroundImage from './bg1.png';

function App() {
  return (
    <div className="App">
      <div
        // key={uuidv4()} // Generate a unique key using uuidv4()
        className="your-component-item"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
