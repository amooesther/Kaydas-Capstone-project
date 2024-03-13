
import './App.css';
import Login from './Components/Login/Login.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/Login/SignUp.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>

      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
