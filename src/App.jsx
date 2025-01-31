import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Milestons from "./components/Milestons";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <Order/>
      <Reviews/>
      <Blog/>
      <Milestons/>
      <Footer/>
    </main>
  );
};

export default App;
