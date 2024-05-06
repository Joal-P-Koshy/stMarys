import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Mcym from './Components/MCYM/Mcym';
import Mccl from './Components/MCCL/Mccl';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';

function App() {
  

  return (

    <>
      <Header />

      <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/mcym' element={ <Mcym /> }/>
      <Route path='/mccl' element={ <Mccl /> }/>
      <Route path='/gallery' element={ <Gallery /> }/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
