import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //1. JSX에서는 반드시 부모 요소로 감싸야 한다.
    //<>     </>            태그나 fragment로 감싸면 된다.
    <div> {/* 태그로 감싼경우 */}
    <h1>리액트</h1>
    <h2>리액트h2안녕</h2>
    </div>
    
    );

    // <> {/* fragment로 감싼경우 */}
    // <h1>리액트</h1>
    // <h2>리액트h2안녕</h2>
    // </>
    
    // );
}

export default App;