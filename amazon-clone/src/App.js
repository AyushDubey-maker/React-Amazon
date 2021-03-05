import React,{useEffect} from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Login from './Login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
import Payment from './Payment';
import Orders from './Orders';
function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }else{
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  });
  return ()=>{
    unsubscribe();
  }
  },[])
  console.log(user);
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/orders">
        <Header/>
        <Orders/>
      </Route>
    <Route path="/payment">
        <Header/>
        <Payment/>
      </Route>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
    <Header/>
        <Home/>
     </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
