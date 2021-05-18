import React from 'react';
import {Navbar} from './components/Navbar.js';
import { Home } from './pages/Home.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { About } from './pages/About.js';
import { Profile } from './pages/Propfile.js';
import { Alert } from './components/Alert.js';
import { AlertState } from './context/alert/alertState.js';
import { GithubState } from './context/github/GithubState.js';

function App() {
    return (
        <GithubState>
            <AlertState>    
                <BrowserRouter>
                    <Navbar />
                    <div className={'container pt-4'}>
                        <Alert alert={{text: 'test'}}/>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/profile/:name' component={Profile} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>          
  );
}

export default App;
