import React from "react";
import { Header, Content, Footer } from "./func-components";
import Calendar from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData } from "./event-data";

function App() {
  return (
    <>
      <Header />

      <center>
        <Calendar/>
      </center>

      <Content/>
      <EventData/>
      <Calculator2 />

      <Footer />
    </>
  );
}

export default App;