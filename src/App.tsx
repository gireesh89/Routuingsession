import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route, BrowserRouter, RouteProps, Switch,NavLink,RouteComponentProps, match,Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

import bootstrap from 'bootstrap'
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Users from './components/Users/Users';
import Details from './components/Details/Detail';
import { History } from 'history';


class App extends Component{
  render() {   
    
    return (
      <React.Fragment>        
        <div>
        <h1>Welcome to React</h1>
        <ul className="header">
          <li><NavLink activeStyle={{color:'red'}}  exact  to="/" >Home</NavLink></li>
          <li><NavLink exact  to="/dashboard">Dashboard</NavLink></li>
          <li><Link  to={{
              pathname: '/registration'   
                         
          }}>Registration</Link>  </li>
          <li><Link to="/default">Default</Link>  </li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>      
        <div className="content">        
           
             
        <Switch>
        <Route component={Home} exact={true} path='/'></Route>  
          <Route component={Dashboard} exact={true} path='/dashboard' ></Route>  
          <Route path='/Default' exact={true} render={() => <div>Home Page</div>}></Route>
          <Route component={Users} path="/users"></Route> 
          <Route component={Details} path="/details/:id"></Route>
          {/*<Route component={Details} path="/details"></Route>*/}
          <Route component={Registration} exact={true} path="/registration"></Route>
          <Redirect from="/" to="/dashboard"></Redirect>
             
             
              
        </Switch>  </div> 
               
      </div>
      </React.Fragment>
      
    );
  }
}

export default App;
