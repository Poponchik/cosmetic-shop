import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Catalog from "./Catalog";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import Login from "./Login";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Admin from "./Admin";
import Registration from "./Registration";
import * as React from "react";
import "@fontsource/montserrat-alternates";
import Layout from "./layout";
import Carosel from "./carusel";
import {Flasher} from "react-universal-flash";
import Message from "./Message"
import './styles/App.css'



function App() {
  return (
    <Router>
       <Flasher position="top_right"> 
          <Message/>
       </Flasher>
      <Routes>
        <Route path="/p/:productId" element={<Layout><ProductCard/></Layout>} />
        <Route path="/carusel" element={<Carosel/>} />
        <Route path="/admin" element={<Layout><Admin/></Layout>} />
        <Route path="/newProduct" element={<Layout><AddProduct/></Layout>} />
        <Route path="/editProduct" element={<Layout><EditProduct/></Layout>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/registration" element={<Registration/>} />
        <Route  path="/" element={<Layout><Main /></Layout>}/>
        <Route  path="/catalog/:categoryName" element={<Layout><Catalog /></Layout>}/>
        <Route  path="/cart" element={<Layout><Cart /></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
