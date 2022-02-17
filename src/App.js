import logo from './logo.svg';
import './App.css';
import Footer from './compónentes/Footer';
import NavBar from './compónentes/NavBar';
import ListaCarrito from './compónentes/ListaCarrito';

function App() {

  const saludo =" holaaaaaa!!!!";

  const stylesLi = {
    color : 'orange',
    backgroundColor : 'black',
  }


  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <ListaCarrito></ListaCarrito>
        <h1>{saludo}</h1>
        <h1 className="text-3xl font-bold underline">VENTA DE BEBIDAS!!!</h1>
        <button class="btn btn-primary">Button</button>
        <Footer></Footer>
      </div>
    </>
    
  );
}

export default App;
