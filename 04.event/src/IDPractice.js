import React, { useState } from "react";

const IDPractice = () => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const onChangeUserID = (e) => setUserId(e.target.value);

  const onChangePwd = (e) => setUserPwd(e.target.value);

  const onClick = (e) => {
    if (userId == "") {
      alert("ID를 입력해주세요");
    } else if (userPwd == "") {
      alert("Pwd를 입력해주세요");
    } else {
      alert(userId + ":" + userPwd);
    }
    setUserId("");
    setUserPwd("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>로그인</h1>
      <label>
        아이디 :
        <input
          type="text"
          name="id"
          placeholder="ID를 입력하세요"
          value={userId}
          onChange={onChangeUserID}
        ></input>
      </label>
      <label>
        비밀번호 :
        <input
          type="text"
          name="pwd"
          placeholder="PWD를 입력하세요"
          value={userPwd}
          onChange={onChangePwd}
          onKeyPress={onKeyPress}
        ></input>
      </label>
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default IDPractice;
