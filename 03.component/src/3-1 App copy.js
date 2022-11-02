import React, {Component} from 'react'; /* react에서 React와 {Component}를 가져온다. */
import './App.css';

class App extends Component { /* Component라는 부모 안에 render 함수가 있음. = 오버라이드 */
  //부모인 Component에 있는 render 함수를 가져다 쓴다. 오버라이드
  render() {
    const name = 'react';
   return <div>{name}</div>
  }
}

export default App;
