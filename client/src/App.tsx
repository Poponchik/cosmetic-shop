import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Catalog from "./Catalog";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import Login from "./Login";
import Registration from "./Registration";
import * as React from "react";
import "@fontsource/montserrat-alternates";
import Layout from "./layout";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/product" element={<Layout><ProductCard/></Layout>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/registration" element={<Registration/>} />
        <Route  path="/" element={<Layout><Main /></Layout>}/>
        <Route  path="/catalog" element={<Layout><Catalog /></Layout>}/>
        <Route  path="/cart" element={<Layout><Cart /></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
