
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import {AuthContextPro } from './context/authcontext';
import { ToastContextProvider } from './context/ToastContext';

function App() {
  return (
   <>
   <ToastContextProvider>
   <AuthContextPro>
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
   </AuthContextPro>
   </ToastContextProvider>
   
  
   </>
  );
}

export default App;
