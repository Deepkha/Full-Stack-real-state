
import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  

  return (
    <>
    <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element= {<SignIn />} />
    <Route path='/sign-out' element= {<SignOut/> }/>
    <Route path='/about' element= {<About /> }/>
    <Route path='/profile' element= {<Profile/>} />
     
      
      </Routes>
      </Router>
    </>
  )
}

export default App
