
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import {Route,Routes} from 'react-router-dom'
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
  return (
   <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/edit/:id' element={<Edit />}></Route>
        <Route exact path='/details/:id' element={<Details />}></Route>
      </Routes>


   </>
  );
}

export default App;
