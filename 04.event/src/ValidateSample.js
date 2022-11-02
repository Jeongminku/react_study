import React, { Component } from "react";
import "./ValidateSample.css";

class ValidateSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus(); //인증하기 버튼을 누른 후 키입력 커서(포커스)가 가있음.
  };

  render() {
    return (
      <div>
        <input
          // ref={()=>{}}
          ref={(ref) => {
            this.input = ref; //input이라고 적은 부분은 이름을 내 마음대로 변경 가능.
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleButtonClick}>인증하기</button>
      </div>
    );
  }
}

export default ValidateSample;
