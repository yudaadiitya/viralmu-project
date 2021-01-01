import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Signin from './components/LoginRegister/signin';
import Signup from './components/LoginRegister/signup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;