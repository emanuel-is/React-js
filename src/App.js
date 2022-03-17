
import './App.css';
import Footer from './componentes/Footer';
import NavBar from './componentes/Navbar/NavBar';
import ListaCarrito from './componentes/Carrito/ListaCarrito';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetails/ItemDetailContainer';




function App() {

  const saludo =" holaaaaaa!!!!";
  const stylesLi = {
    color : 'orange',
    backgroundColor : 'black',
  }
  


  return (
    <>
    <BrowserRouter>
    
    
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:product' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<ListaCarrito/>} />
      </Routes>
    
      
    
      
  
      <Footer/>
      
    
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
