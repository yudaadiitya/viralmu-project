import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Detail from './components/Detail';
import Upload from './components/Upload';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/detail' component={Detail} />
          <Route path='/upload' component={Upload} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;