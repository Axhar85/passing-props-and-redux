import './App.css';
import React, { useState } from 'react';
import Main from './components/Main';

import MyProvider from './context/MyProvider';

function App() {

  //let [age , setAge] = useState(25)
  //let[name] = useState('Rafael')

  //const getOld = () => setAge(age + 1)

  return (
    <MyProvider> 
      <div className="App">
      
      <h3> This is App.js with nothing special being rendered </h3>
      <hr/>
      {/*<Main name={name} age={age} getOld= {getOld} />*/}
        <Main />
      </div>
     </MyProvider>
  );
}

export default App;

