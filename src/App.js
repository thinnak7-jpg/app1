// import React from "react";
// import { Header, Content, Footer } from "./func-components";
// import Calendar from "./class-components";
// import { Calculator2 } from "./calculator";
// import { EventData } from "./event-data";
// import RefsFunc from './refs-func';
// import RefsArray from './refs-array'
// import Cart from './state-class'
// import StateFunc from './state-func'

// function App() {
//   return (
//     <>
//       <Header />
//       <center>
//         <Calendar/>
//       </center>
//       <Content/>
//       <EventData/>
//       <Calculator2 />
//       <RefsFunc />
//       <StateFunc />
//       <Cart />
//       <RefsArray />
//       <Footer />
//     </>
//   );
// }

// export default App;
import React from 'react'
import { userContext } from './context'
import Header from './context-header'
import Content from './context-content'
import Header2 from './context-header2'
import Content2 from './context-content2'

export default function App() {
    let [user, setUser] = React.useState('')

    return (
        <>
            <userContext.Provider value={'Tom Jerry'}>
                <Header/>
                <Content/>
            </userContext.Provider>

            <br/>
            <hr/>
            <br/>

            <userContext.Provider value={[user, setUser]}>
                <Header2/>
                <Content2/>
            </userContext.Provider>
        </>
    )
}