import { memo, useEffect } from "react";
import { getBsProps } from "react-bootstrap/lib/utils/bootstraputils";

function Test(){
    return (
        <Parent name='yjw' age="20"/>
    );
}

function Parent(props){
    return(
        <div>
            <Child1 name={props.name}></Child1>
            <Child2 name={props.age}></Child2>
        </div>
    )
}

function Child1(){
    useEffect( () => {console.log('렌더링됨1')} );
    return <div>111</div>
}
/**
 * memo사용 시 함수 표현식으로 사용해야한다.
 * memo를 사용할 경우 state가 변할 경우만 렌더링된다.
 * 하지만 state 사이즈가 클 경우 모든 state가 변경되었는지 확인하기 떄문에
 * 효율이 좋지 않을 수 있다.
 */
let Child2 = memo(function(){   
    useEffect( () => { console.log('렌더링됨2') } );
    return <div>222</div>
})
