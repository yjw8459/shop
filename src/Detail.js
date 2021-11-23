import React, { useEffect } from 'react';
import {useState, useHistory, useParams } from 'react-router-dom';

function Detail(props){
  let { id } = useParams(); //RequestParam 
  let 찾은상품 = props.shoes.find((상품) => { return 상품.id == id }); 
  //find : ES6 신문법, Array 안에서 원하는 자료를 찾고 싶을 때 사용한다.

  let [ alert, alert변경 ] = useState(true);
  useEffect( () => {
      let 타이머 = setTimeout( () => { alert변경(false) }, 2000 );
  }, [alert]);
return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
);
}
export default Detail;