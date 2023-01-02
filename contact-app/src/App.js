
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import { AuthContextPro } from './context/authcontext';

function App() {
  return (
   <>
   <AuthContextPro>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
   </AuthContextPro>
  
   </>
  );
}

export default App;
