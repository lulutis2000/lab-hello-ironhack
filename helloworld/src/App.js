import React from 'react';
import './App.css';
import Features from './components/features/Features'

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <figure>
          <img src="/ironhack-logo.svg"></img>
          </figure>
          <figure>
          <img src="/menu-top.svg"></img>
          </figure>
        </nav>
    <header>
<div id="wrapper">
<div>
<h1>Say hello to <br/> ReactJS</h1>
<p>You will learn a Frotend <br/> Framework form scratch to <br/> become a Ninja Developer</p>
<button>Awesome</button>
</div>
<div>
<figure>
  <img src="/react-logo.svg"></img>
</figure>

</div>
</div>
    </header>
    </main>
    <section id = "description">

    

    <Features img="/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs"/>

    <Features img="/icon2.png" title="Componentes" description="Build encapsulated components that manage their state"/>

    <Features img="/icon3.png" title="Single-Way" description="A set of inmutable values are passed to the component's."/>

    <Features img="/icon4.png" title="JSX" description=" Statically-typed, design to run on modern browsers."/>

    </section>
    
    
    
    
     
     
    </div>
  );
}

export default App;
