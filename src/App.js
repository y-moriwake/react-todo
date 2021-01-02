import { Fragment, useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');

  // setText関数
  const changedText = (e) => {
    setText(e.target.value)
  }

  // alert出力関数
  const clickedButton = () => {
    alert(text);
  }

  return (
    <Fragment>
      <h1>Hello!! React!!</h1>
      <input type="text" value={text} onChange={changedText} />
      <br />
      <button onClick={clickedButton}>Click Me!!!</button>
    </Fragment>
  );
}

export default App;
