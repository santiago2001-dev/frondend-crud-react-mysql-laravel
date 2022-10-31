import './App.css';
import ShowProducts from './components/ShowProducts';
import CreateProducts from './components/CreateProducts'
import EditProduct from './components/EditProducts';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (                  
    <div className="App">
      <header className="App-header"> 
        {/* rutas a componentes */}
        <BrowserRouter>
        <Routes>
            <Route path='/' element  = {<ShowProducts/>}/>
            <Route path='/create' element  = {<CreateProducts/>}/>
           <Route path='/update/:id' element  = {<EditProduct/>}/> 
        
        </Routes>
        </BrowserRouter>
      </header>
    </div>
    
  );
}

export default App;
