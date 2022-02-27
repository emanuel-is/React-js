
import './App.css';
import Footer from './componentes/Footer';
import NavBar from './componentes/Navbar/NavBar';
import ListaCarrito from './componentes/Carrito/ListaCarrito';
import ItemListContainer from './componentes/ItemList/ItemListContainer';





function App() {

  const saludo =" holaaaaaa!!!!";
  const stylesLi = {
    color : 'orange',
    backgroundColor : 'black',
  }
  


  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer/>
     

      <ListaCarrito></ListaCarrito>
      

        
        
        <Footer></Footer>
      
    </>
    
  );
}

export default App;
