
import './App.css';
import React,{useState} from 'react';
import Header from './components/Header/Header';
import Model from './components/Model/Model';
import { Routes,Route } from 'react-router-dom';
import ShowCars from './components/Cars/ShowCars';
import LoginOverLay from './components/Login/BackDrop';
import Menu from './components/PopularModels/Menu';
import CarBody from './components/CarBody';
import ShowCarTypes from './components/ShowCarTypes';
import Footer from './components/Footer/Footer';

function App() {
   const [close,setClose]=useState(false);
  const closeLogin=()=>{
     setClose(null)
  }

  return (
    <div className="App">
      <Header />
      <main className='main'>
      
         <Routes>
            <Route  path='/' element={<Model/>}/>
            <Route  path='/cars/:modelid' element={<ShowCars/>}/>
            {close!=null &&<Route exact path='/login' element={<LoginOverLay onConfirm={closeLogin}/>}/>}
         </Routes>
      </main>
      <section>
         <Routes>
            <Route path='/' element={<Menu/>}/>
         </Routes>
         </section>
         <section>
             
             <Routes>
             <Route path='/' element={<CarBody/>}/>
               <Route path='/type/:bodytype' element={<ShowCarTypes/>}/>
             </Routes>
         </section>
         
         <Footer/>

    </div>
  );
}

export default App;
