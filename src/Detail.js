import React, { useContext, useEffect } from 'react';
import {useState, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { 재고context2 } from './App.js';  //App.js의 Context를 가져올 때 export import로 사용한다 
import {Nav} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

let 박스 = styled.div`
  padding-top : 30px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;

function Detail(props){
  let { id } = useParams(); //RequestParam 
  let history = useHistory();
  let 찾은상품 = props.shoes.find((상품) => { return 상품.id == id }); 
  //find : ES6 신문법, Array 안에서 원하는 자료를 찾고 싶을 때 사용한다.

  let [ alert, alert변경 ] = useState(true);
  useEffect( () => {
      let 타이머 = setTimeout( () => { alert변경(false) }, 2000 );
  }, [alert]);

  let useContext재고 = useContext(재고context2);
  console.log(useContext재고);

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>
    <div className="my-alert2">
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
        <p>{props.재고}</p>
      </div>
    </div>

    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">  {/* defaultActiveKey에 Uri도 넣을 수 있음. */}
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={ () => { 누른탭변경(false) } } >Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={ () => {누른탭변경(false) } } >Option 2</Nav.Link>
      </Nav.Item>
    </Nav>

{/* 
  timeout은 몇 밀리세컨드동안 동작할건지, 없으면 안된다.
  classNames : 애니메이션 이름
  in : true일 경우만 애니메이션 작동 
*/}
    <CSSTransition in={스위치} classNames="wow" timeout={500}>
      <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
    </CSSTransition>

  </div> 




);
}

function TabContent(props){

  useEffect( () => {
    props.스위치변경(true);
  } );

  if (props.누른탭 === 0){
    return <div>1 누른탭</div>
  } else if (props.누른탭 === 1){
    return <div>2 누른탭</div>
  } else if (props.누른탭 === 2){
    return <div>3 누른탭</div>
  }

}

function Info(props){
  return (
    <p>재고 : {props.재고[0] }</p>
  )
}

export default Detail;