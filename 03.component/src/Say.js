import React, { useState } from 'react';

const Say = () => {
    
    /* 이것과 같은 상황
    this.state = {
        message: ''
    }
    */
    
    const [ message, setMessage ] = useState('디폴트')
    const onClickEnter = () => {setMessage('업데이트하고싶은 state값을 써주세요')}
    const onClickLeave = () => {setMessage('안녕히 가세요')}
    
    /* state값 or props 값을 바꿀경우 다시 render 가 된다. F12창 element에서 보면 렌더링되는부분이 바뀌는걸 클릭하면서 확인 가능함.*/


    //1. useState 사용을 위한 선언
    //const [초기값 변수, 업데이트 함수] = useState(초기값)
    const  [ color, setColor] = useState('black')
    
    //2. useState 사용
    //   업데이트 함수(업데이트 값)
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick = {() => { setColor('red') }}>빨강</button>
            <button style={{color: 'orange'}} onClick = {() => { setColor('orange') }}>주황</button>
            <button style={{color: 'blue'}} onClick = {() => { setColor('blue') }}>파랑</button>

        </div>
    );
}

export default Say;