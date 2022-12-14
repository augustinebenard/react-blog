
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';


const App = () => {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>

          <Switch>
            <Route exact path={"/"}><Home></Home></Route>
            <Route path={"/create"}> <Create></Create></Route>
            <Route path={"/post/:id"}> <BlogDetail></BlogDetail></Route>
            <Route path={"*"}> <NotFound></NotFound></Route>
          </Switch>

        </div>
      </div>
    </Router>
  )
}

export default App
