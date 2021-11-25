import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){

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
                props.state.map((item, i) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quan}</td>
                            <td>
                                <button onClick={ props.dispach({type : "증가"}) }>+</button>
                                <button onClick={ props.dispach({type : "감소"}) }>-</button>
                            </td>
                        </tr>
                    );
                })
                }
            </Table>
      </div>
    );
}


function connectState(state){
    return {
        state : state
    }
}

export default connect(connectState)(Cart)