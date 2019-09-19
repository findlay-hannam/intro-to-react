import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logo from './logo.svg';
import './App.css';
import CounterButton from './CounterButton';
import ApiList from './ApiList'
import Input from './Input';
import CounterButtonContainer from './CounterButtonContainer';
import IncrementButtonContainer from './IncrementButtonContainer';
import CounterDisplayContainer from './CounterDisplayContainer';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <IncrementButtonContainer />
          <CounterButtonContainer />
          <CounterDisplayContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
