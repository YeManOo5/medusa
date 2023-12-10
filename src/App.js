import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Welcome from './first/Welcome';
import Profile from './first/Profile';

function App() {
  return (
    <div className="">
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  
</div>
  );
}

export default App;
