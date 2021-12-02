import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
//.없이 이름만 있는 경우는 라이브러리임.
//HashRouter : 라우팅을 안전하게 할 수 있음. #뒤에 오는 것들은 절대 전송되지 않음.
//BrowserRouter : 서버에 요청할 수도 있으므로 위험.

let 초기값 = [ {id : 0, name : '신발1', quan : 2}, 
             {id : 1, name : '신발2', quan : 1},  
             {id : 2, name : '신발3', quan : 6}];

let alert초기값 = true;
function reducer(state=초기값, action){
  let arr = [...state];

  if( action.type === '항목추가' ){
    let found = arr.findIndex( (a) =>  a.id === action.data.id  );
    if ( found >= 0 ){
      arr[found].quan++;
      return arr;
    } 
    arr.push(action.data);
    return arr;
  } 
  else if( action.type === '증가' ){
    arr[action.id].quan++;
    return arr;
  }
  else if( action.type === '감소' ){
    arr[action.id].quan--;
    return arr;
  }  
  else  return state;
}

function reducer2(state= alert초기값, action){
  if(action.type === 'close'){
    state = false;
    return state;
  }
  return state;
}


//let redux = createStore(reducer); 하나의 reducer

//여러 개의 reducer
let redux = createStore(combineReducers({reducer, reducer2}));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={redux} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
