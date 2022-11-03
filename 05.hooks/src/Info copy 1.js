import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // // 1. 컴포넌트가 렌더링이 될 때마다 실행 됨. (8~11)
  // useEffect(() => {
  //   console.log("useEffect 렌더링이 완료되었습니다.");
  //   console.log({ name, nickname });
  // });

  // // 2. 맨 처음 렌더링 될때만 실행되고 업데이트 될 때는 실행되지 않게 할것. } 뒤에, 넣고 [] 빈 배열 하나를 쓰면 된다.
  // useEffect(() => {
  //   console.log("useEffect 렌더링이 완료되었습니다.");
  //   console.log({ name, nickname });
  // }, []);

  // // 3. 특정 값이 변경될때만 호출 할 수 있음. []안에 변경시 호출하고싶은 값을 입력함.
  // useEffect(() => {
  //   console.log("useEffect 렌더링이 완료되었습니다.");
  //   console.log({ name, nickname });
  // }, [name]);

  // // 4. 뒷정리 함수: 컴포턴트가 업데이트 되기 전에 실행
  // // (실행되면 retun ()=> {} 값이 먼저 실행되고 그 뒤에 순차실행함(?))
  useEffect(() => {
    console.log("useEffect 렌더링이 완료되었습니다.");
    console.log({ name });

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  //name을 변경시킴 (useState를 활용한 onChange)
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  //nickname을 변경시킴
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
