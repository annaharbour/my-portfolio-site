import React, {useState} from 'react'
import About from "./About";
import Contact from "./Contact";
import Header from './Header'
import Skills from "./Skills";
import Nav from './Nav';
import Demos from './Demos';
import "./App.css"


function App( ) {
  const [selected, setSelected] = useState("About")

  const handleSelection= (newSelection) => {    
    setSelected(newSelection)
  }

  return (
  
    <div className="App">
       
      <Header/>
      <Nav selected={selected} handleSelection={handleSelection} />
        <main>
          {selected === "About" && <About />}
          {selected === "Skills" && <Skills />}
          {selected === "Contact" && <Contact />}
          {selected === "Demos" && <Demos />}
        </main>       
    </div>
    
  );
}

export default App;
