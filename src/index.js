import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { allReducers } from './reducers';

const initialState = {
  todos : [
    {
        item: 'Drop Farah at 10:30',
        completed: false,
        id: Math.floor(Math.random() * 1000000 + 1)
    },
    {
        item: 'Car Service at 11:00',
        completed: false,
        id: Math.floor(Math.random() * 1000000 + 1)
    },
    {
        item: 'Visit Doctor at 12:30',
        completed: false,
        id: Math.floor(Math.random() * 1000000 + 1)
    }
  ]
}

const store = createStore(allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
