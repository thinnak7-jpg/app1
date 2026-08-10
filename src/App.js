import React from "react";
import { Header, Content, Footer } from "./func-components";
import Calendar from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData } from "./event-data";
import RefsFunc from './refs-func';
import RefsArray from './refs-array'

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
      <RefsFunc />
      <RefsArray />
      <Footer />
    </>
  );
}

export default App;