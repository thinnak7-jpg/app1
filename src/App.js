import React from "react";
import { Header, Content, Footer } from "./func-components";
import Calendar from "./class-components";
import { Calculator2 } from "./calculator";

function App() {
  return (
    <>
      <Header />

      <center>
        <Calendar />
      </center>

      <Content />

      <Calculator2 />

      <Footer />
    </>
  );
}

export default App;