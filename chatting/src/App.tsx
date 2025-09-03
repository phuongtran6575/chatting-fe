import './App.css'
import { Box } from '@mui/material'
import LoginPage from './assets/page/auth/LoginPage'
import RegisterPage from './assets/page/auth/RegisterPage'
import UserProfilePage from './assets/page/chat/UserProfilePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={ <RegisterPage/> }></Route>
        <Route path='/' element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
