import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/segnup' component={Signup} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;