import React, { useRef } from "react";

const MyComponent = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printID = () => {
    console.log(id.current);
  };

  return <div>useRef 테스트 페이지입니다.</div>;
};

export default MyComponent;
