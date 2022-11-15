
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import ColorSchemesExample from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
    <Route path='/detalle:detalleId' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
