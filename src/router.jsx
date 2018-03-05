import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Index from './scenes/Index';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store from './store';
import GuestNavbar from "./components/GuestNavbar"
import {Container} from "reactstrap"
import Project from "./scenes/Project/ProjectContainer"

const history = createBrowserHistory();

export default () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{height: "100%"}}>
        <GuestNavbar/>
        <Container style={{minHeight: '82.5%'}} className='mt-3'>
          <Switch>
            <Route path="/" component={Index}/>
          </Switch>
        </Container>
      </div>
    </ConnectedRouter>
  </Provider>

