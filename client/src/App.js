import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './components/LoginRegister/signin';
import Signup from './components/LoginRegister/signup';
import Home from './components/Home';
import Detail from './components/Detail';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/detail/:_id' component={Detail} />
            <Route path='/upload' component={Upload} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;