import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar';
import ListaCarrito from './componentes/ListaCarrito';
import ComponentEstado from './componentes/ComponentEstado';
import PruebadeApi from './componentes/PruebadeApi';




function App() {

  const saludo =" holaaaaaa!!!!";

  const stylesLi = {
    color : 'orange',
    backgroundColor : 'black',
  }
  


  return (
    <>
      <NavBar></NavBar>
     

      <ListaCarrito></ListaCarrito>
      

        
        {/* <h1>{saludo}</h1>
        <h1 className="text-3xl font-bold underline">VENTA DE BEBIDAS!!!</h1>
        <button class="btn btn-primary">Button</button> */}
        <Footer></Footer>
      
    </>
    
  );
}

export default App;
