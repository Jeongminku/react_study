import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  //화살표함수모양

  handleChange = (e) => {
    //state 변경함수
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div>
        <h1>연습모드</h1>
        {/* 인풋 오류발생함 왜? */}
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message} //현재 스테이트 객체 안에있는 message의 value를 가져옴
          onChange={
            this.handleChange
            /* /* console.log(e.target.value); */
            //target.value : 해당타겟에 쓰인 value를 가져옴
            /* state 변경 함수 */
          }
        ></input>

        <button onClick={this.handleClick}>확인버튼</button>
      </div>
    );
  }
}

export default EventPractice;
