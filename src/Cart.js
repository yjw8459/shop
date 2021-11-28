import React from 'react';
import {Table} from 'react-bootstrap';
import {connect, useDispatch, useSelector} from 'react-redux';

function Cart(props){
    let state = useSelector((state) => state.reducer);  //((state) => state) : return state;와 같음
    let dispatch = useDispatch();

    return(
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                {
                state.map((item, i) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quan}</td>
                            <td>
                                <button onClick={ dispatch({type : "증가", idx : item.id}) }>+</button>
                                <button onClick={ dispatch({type : "감소", idx : item.id}) }>-</button>
                            </td>
                        </tr>
                    );
                })
                }
            </Table>
            <div className="my-alert2">
                <p>지금 구매하시면 신규할인 20%</p>
                <button onClick={ props.dispatch({type : 'close'}) }>닫기</button>
            </div>
      </div>
    );
}



export default Cart;

// function connectState(state){
//     return {
//         state : state
//     }
// }

// export default connect(connectState)(Cart)