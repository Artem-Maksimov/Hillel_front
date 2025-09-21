import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { store, history } from './store';
import Main from './pages/Main';
import Hotels from './pages/Hotels';
import About from './pages/About';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/hotels" component={Hotels} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;