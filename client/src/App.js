import React, { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Signin from './components/LoginRegister/signin';
import Signup from './components/LoginRegister/signup';
import Home from './components/Home';
import Detail from './components/Detail';
import Upload from './components/Upload';
import PrivateRoute from './components/HOC/PrivateRoute'
import { getInitialData } from './actions/initialData';
import { isUserLoggedIn } from './actions/users';
import { useDispatch, useSelector } from 'react-redux';



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  //componentDidMount or componentDidUpdate
  useEffect(() => {
    console.log(auth)
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }


  }, [auth.authenticate]);

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/detail' component={Detail} />
          <PrivateRoute path='/upload' component={Upload} />
        </main>
      </div>
    </BrowserRouter>
  );
}


export default App;