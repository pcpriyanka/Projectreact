//import logo from './logo.svg';
import './App.css';
import Center from './components/center/Center';
//import Center from './components/center/Center';
//import Center1 from './components/center/Center1';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import Navbar from './components/Navbar';
//import List from './components/List';
//import Product from './components/Product';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
       <Center/>
        
        
       </BrowserRouter>
       
  );
}

export default App;
