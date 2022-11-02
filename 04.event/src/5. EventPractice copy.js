import React, { useState } from "react";
//useState 불러오기 1번줄   useState에 관하여
const EventPractice = () => {
  const [username, setUsername] = useState(""); // 4번 useState 만들기   useState('초기값')
  const [message, setMessage] = useState(""); //5번 useState 만들기   useState('초기값')

  //username과 message를 바꿔줄 함수
  // const onChangeUsername = (e) => {}
  // username의 state 값을 바꾼다
  const onChangeUsername = (e) => setUsername(e.target.value); //리턴이 하나만있으면 {}랑 return 생략가능
  // usermessage의 state 값을 바꾼다
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = (e) => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>연습모드</h1>
      <input
        type="text"
        name="username"
        placeholder="유저네임을 입력하세요"
        value={username}
        onChange={onChangeUsername}
      ></input>

      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>확인버튼</button>
    </div>
  );
};

export default EventPractice;
