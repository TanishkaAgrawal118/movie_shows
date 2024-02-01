import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import Home from './Components/Home';
import NavigationBar from './Components/Navbar';
import Form from './Components/Form';

function App() {
  return (
    <>
        <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Hero></Hero>}></Route>
          <Route path='/movies' element={<Home></Home>}></Route>
          <Route path='/detail' element={<Form></Form>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
