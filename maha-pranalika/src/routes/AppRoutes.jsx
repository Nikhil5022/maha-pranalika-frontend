import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import FAQ from '../pages/FAQ'
import Logout from '../pages/Logout'
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq"  element={<FAQ/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
  )
}

export default AppRoutes
