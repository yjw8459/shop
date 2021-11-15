import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
//.없이 이름만 있는 경우는 라이브러리임.
//HashRouter : 라우팅을 안전하게 할 수 있음. #뒤에 오는 것들은 절대 전송되지 않음.
//BrowserRouter : 서버에 요청할 수도 있으므로 위험.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
