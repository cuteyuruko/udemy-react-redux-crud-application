import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';//add
import { Provider} from 'react-redux';//add
import './index.css';
import reducer from './reducers';//add
import App from './components/App';//modify
import reportWebVitals from './reportWebVitals';

//全階層でStoreを利用するようにする。start
const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//全階層でStoreを利用するようにする。end

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
