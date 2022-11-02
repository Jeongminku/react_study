import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };

  //화살표함수모양

  handleChange = (e) => {
    //state 변경함수
    this.setState({ [e.target.name]: e.target.value }); //e.target.name = 이벤트가 발생하고있는 DOM의 name에서 값을 가져옴.
  }; //여러개의 input창을 다룰때 [] 를 이용하여 다룰 수 있다.

  handleClick = () => {
    alert(this.state.message + ":" + this.state.username);
    this.setState({
      message: "",
      username: "",
    });
  };
  //e = 이벤트 객체를 가져올때 씀.  만약 enter키를 press하면 실행하는데 handleClick 함수를 실행해 줘
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>연습모드</h1>
        {/* 인풋 오류발생함 왜? */}
        <input
          type="text"
          name="username"
          placeholder="유저네임을 입력하세요"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>

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
          onKeyPress={this.handleKeyPress}
        ></input>

        <button onClick={this.handleClick}>확인버튼</button>
      </div>
    );
  }
}

export default EventPractice;
