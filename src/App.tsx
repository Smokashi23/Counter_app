import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { store } from './store/Store';



function App() {
  return (
    <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
  );
}

export default App;