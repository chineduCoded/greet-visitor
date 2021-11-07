//import Greeting from './Component/GreetingUser/Greeting'
//import HomeScreen from './Component/netflixWatch/HomeScreen'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, SignIn, SignUp } from './Pages/Pages'
const App = () =>  {
  return (
     <Router>
       <Navbar />
       <Routes>
	  <Route path='/' element={<Home />} />
	  <Route path='about' element={<About />} />
	  <Route path='contact' element={<Contact />} />
	  <Route path='login' element={<SignIn />} />
	  <Route path='logout' element={<SignUp />} />
       </Routes>
     </Router>
  );
}

export default App;
