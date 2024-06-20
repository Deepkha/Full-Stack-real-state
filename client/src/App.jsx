
import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  

  return (
    <>
    <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element= {<SignIn />} />
    <Route path='/sign-up' element= {<SignUp/> }/>
    <Route path='/about' element= {<About /> }/>
    <Route element={<PrivateRoute/>} >
    <Route path='/profile' element= {<Profile/>} />
    </Route>
     
      
      </Routes>
      </Router>
    </>
  )
}

export default App
