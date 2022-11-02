import './App.css';

function App() {
  const name = '리액트'
  return ( /* 리액트에서는 닫는태그가 없으면 안된다. <input></input> 으로 쓰거나 <input /> 이라고 써야 정상작동. */
    <>
      <div className='react'>{name}</div>
      {/* <input></input> */}
      <input/>
    </> 
    );
}

export default App;

