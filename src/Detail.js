import React, { useEffect } from 'react';
import {useState, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

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
  let 재고 = useContext(재고context);

  let [ alert, alert변경 ] = useState(true);
  useEffect( () => {
      let 타이머 = setTimeout( () => { alert변경(false) }, 2000 );
  }, [alert]);
return (
    <div className="container">
      <박스>
        <제목>Detail</제목>
      </박스>
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
  </div> 
);
}
export default Detail;