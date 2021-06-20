import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
      <Header />
      <div className="divofContent">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
