import './App.css'
import { Box } from '@mui/material'
import LoginPage from './assets/page/auth/LoginPage'
import RegisterPage from './assets/page/auth/RegisterPage'
import UserProfilePage from './assets/page/chat/UserProfilePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MessageWindowPage from './assets/page/chat/MessageWindowPage'
import MessageWindowLayout from './assets/components/Layout/MessageWindowLayout'

function App() {

  return (
    <Box>
      <MessageWindowLayout/>
      { /*<BrowserRouter>
      <Routes>
        <Route path='/register' element={ <RegisterPage/> }></Route>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/chatbox' element={<MessageWindowPage/>}></Route>
      </Routes>
    </BrowserRouter> */ }
    </Box>
    
    
  )
}

export default App
