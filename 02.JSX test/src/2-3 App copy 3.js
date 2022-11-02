import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'undefined';
  return (
    <div>
    {name || '리액트'}
    </div>
    );
}

export default App;


/* A && B    A가 true 라면 B가 결과값 */
/* A && B    A가 false 라면 A가 결과값 */


/* A || B    A가 true 라면 A가 결과값 */
/* A || B    A가 false 라면 B가 결과값 */

