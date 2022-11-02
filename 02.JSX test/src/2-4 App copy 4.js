import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트'
  const style = { /* CSS를 카멜케이스로 작성해야함. */
    backgroundColor: 'red',
    color: 'white',
    fontSize: '48px'
  }
  return (
    <div style={style}>
      {name}
    </div>
    );
}

export default App;

