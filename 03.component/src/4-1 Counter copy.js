import React, { Component } from 'react';
//클래스형을 쓰고싶으면 컴포넌트를 써야함. 컴포넌트쓰려면 임포트로 넣어야함.   JS, JSX 스닛펫 설치이후에 rcc라고 입력하면 됌.

class Counter extends Component {
    constructor(props) {
        super(props) //component의 생성자 함수를 호출해줌
        this.state = {
            //state 초기화
            number: 0,
            number2: 0,
            fixedNumber: 0

        }
    }

    render() {
        const { number, number2, fixedNumber } = this.state
            return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                <h3>{number2}</h3>
                <button onClick={()=>{
                    // state 변경방법
                    this.setState({
                        number: number + 1
                    }, ()=>{
                        console.log('방금 state가 호출되었습니다')
                        console.log(this.state)
                    })
                    
                }}>+1</button>
                {/* setState */}
                <button onClick={()=>{
                    this.setState( {number2: number2 - 1})
                }}>-1</button>

                {/* prevState */}
                <button onClick={()=>{
                    this.setState((prevState) => {
                        return {
                            number: prevState.number +2
                        }
                        })
                    }}>+2</button>
            </div>
        );
    }
}

export default Counter;

