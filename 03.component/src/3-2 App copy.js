import React, {Component} from 'react'; /* react에서 React와 {Component}를 가져온다. */
import './App.css';
import MyComponent from './MyComponent'

const App = () => {
  // return <MyComponent  /> /* name이라는 이름으로 props를 지정하는법 : name="React " */
  return <MyComponent name="재밌는거" forNumber={1}>리액트</MyComponent> /* "문자열" {숫자} */
}

export default App;