import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Signin from './components/LoginRegister/signin';
import Signup from './components/LoginRegister/signup';
import Home from './components/Home';
import Detail from './components/Detail';
import Upload from './components/Upload';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/users';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/detail' component={Detail} />
          <Route path='/upload' component={Upload} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;