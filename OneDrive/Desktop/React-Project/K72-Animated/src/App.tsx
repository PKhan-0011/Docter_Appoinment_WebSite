
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Projects';
import Agenes from './pages/Agenes';

function App() {
  
  return (
    <>
        <div className='text-white'>
             <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/Projects' element={ <Project/>}/>
                <Route path='/Agenes' element={ <Agenes/>}/>

             </Routes>
        </div>
    </>
  )
}

export default App;


//<Routes>
                   {/* <Route path='/' element={<Home/>} />
                   <Route path='/Projects' element={<Project/>} />
                   <Route path='/Agence' element={<Agenes/>} /> */}
 //            </Routes>