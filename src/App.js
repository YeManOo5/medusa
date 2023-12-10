import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Welcome from './first/Welcome';
import Profile from './first/Profile';
import TestNev from './first/TestNev';

function App() {
  return (
    <div className="">
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/testnev' element={<TestNev/>} />
      </Routes>
    </BrowserRouter>

  
</div>
  );
}

export default App;
