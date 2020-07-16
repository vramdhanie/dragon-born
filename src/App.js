import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExpandableSet startingSet={[{key:0}, {key:1}]}>
          <div>Hello</div>
        </ExpandableSet>
      </header>
    </div>
  );
}

export default App;


function ExpandableSet({
  startingSet,
  itemTitle,
  children
})
{
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState(startingSet);

  return(
     <div className="expandable-set">
        { items.map( item =>
           <div className="expanded-item" id={item['key']} key={item['key']}> { children } </div>
        )}
     </div>
  )
}