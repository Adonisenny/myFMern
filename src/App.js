

import {BrowserRouter as Router,Route,Switch, useLocation} from 'react-router-dom';
import './App.css';

import NavBar from './Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/register';
import Spread from './components/spread';
import UserPage from './components/userpage';


	


function App() {

  
  return (
    <Router >
    <div>
     
      <NavBar />
     <Switch>
     <Route exact path='/'>
     <Home />
   </Route>
      </Switch>
      <Switch>
     <Route exact path='/login'>
     <Login />
   </Route>
   
      </Switch>
      <Switch>
     <Route exact path='/register'>
     <Register />
   </Route>
   
      </Switch>
      <Switch>
     <Route exact path='/spread'>
     <Spread />
   </Route>
   
      </Switch>
      <Switch>
     <Route exact path='/userpage'>
     <UserPage />
   </Route>
   
      </Switch>
     
    </div>
    </Router>
  );
  
}

export default App;
