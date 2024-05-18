import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import FirstPass from './pages/password1'
import SecondPass from './pages/password2'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/password' element={<FirstPass/>}/>
            <Route path='/login/password/error' element={<SecondPass/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}