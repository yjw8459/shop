import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){
    let state = useSelector((state) => state.reducer);  //((state) => state) : return state;와 같음
    let dispatch = useDispatch();
    console.log(state);

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
                                <button onClick={ dispach({type : "증가", idx : item.id}) }>+</button>
                                <button onClick={ dispach({type : "감소", idx : item.id}) }>-</button>
                            </td>
                        </tr>
                    );
                })
                }
            </Table>
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