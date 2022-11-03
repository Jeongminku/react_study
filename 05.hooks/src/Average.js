import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("계산중...");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  //함수 재생성을 방지하기 위한 usecallback
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  //concat 배열에 계속 추가하는것  ,  parseInt 숫자형으로 강제 변환시키는것 (input으로 받아오는 값은 문자열이 되기 때문.)
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber(""); //setNumber를 다시 빈 문자열로 만듦.
      inputEl.current.focus();
    },
    [number, list] //number 혹은 list가 바뀌었을 때만 함수를 생성함.
  );

  // useMemo 기본형   const avg = useMemo(() => {}, []);
  // 중괄호 생략하고 return 생략해서 바로 getAverage(list)라고 입력함.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
