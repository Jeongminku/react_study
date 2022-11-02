import React, { useState } from "react";

const IiterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "빨간색" }, //이거 하나가 하나의 name이 된다.  여기서 id속성을 가져오기위해서 name.id 를 입력한것 (32번째 줄 name.id에 대한 주석)
    { id: 2, text: "주황색" },
    { id: 3, text: "노란색" },
    { id: 4, text: "파란색" },
  ]); /* useState(names의 초기값   여기서는 초기값을 배열로 객체데이터 4개를 넣음.) */

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  //입력된 값으로 업데이트시켜줌
  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      // concat = 배열 뒤에다가 배열의 원소를 또다시 추가해주는 녀석, 두개의 배열을 합쳐준다(?)
      id: nextId,
      text: inputText, //input창에서 입력된 값
    });

    setNextId(nextId + 1);
    console.log(nextNames);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    // const nextNames = names.filter((name) => {return}; //filter = 조건식에 맞는 데이터만 내보내줌  {}랑 return은 return 하나만 쓸거면 생략해도 되기때문에 생략함.
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  /* key는 유일한 값. 원래는 따로 설정해야하지만 급한대로 index를 사용할수도있는데 index값 사용.*/
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IiterationSample;

/*
.map 은 for 문과 비슷해서 배열 함수를 이용할 수 있습니다.

map함수의 가장 큰 역할은 return되는 값 들을 모아서 [배열] 형태로 출력해줍니다.
 */
