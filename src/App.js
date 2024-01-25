// npm start 입력해서 시작

import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // state 사용하기 위해 import

function App() {
  // state 활용하면 값 변경 시 JSX가 자동 재렌더링 됨
  let [name, n] = useState(["Today's", 'dinner', 'is Hunan!']); // Destructuring: name에 값이, n에는 state 변경용 함수가 들어간다

  // { 변수명 }: Data Binding 문법

  // event handler 사용해 보기: onClick = {함수}

  // () => { console.log(1) } 를 함수명 대신 넣어도 된다

  // state가 array/object인 경우 복사본 만들어서 변경함수 인자로 넣는다

  function switchToRev() {
    let copy = [...name]; // [...] 덕분에 copy != name이 된다
    copy[2] = "is Rev Noodle!";
    n(copy);
  }

  function switchToHunan() {
    let copy = [...name];
    copy[2] = "is Hunan!";
    n(copy);
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>
          React 101
        </h4>
      </div>
      <div className = "list">
        <h4>{ name[0] }</h4> 
        <p>Jan 24th</p>
      </div>
      <div className = "list">
        <h4>{ name[1] }</h4>
        <p>Jan 24th</p>
      </div>
      <div className = "list">
        <h4>
          { name[2] } 
          <span onClick = {switchToRev}> (Click 🍜 </span> 
          <span onClick = {switchToHunan}>or 🍗 ) </span> 
        </h4>
        <p>Jan 24th</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  let [like, l] = useState(0);
  function clickLike() {
    l(like+1);
  }

  return (
    <div className = "modal">
      <h4>Hunan and Rev are decent restaurants.</h4>
      <p>🍜 🥰 🍗</p>
      <p>Do you agree? Then click this button: <span onClick = {clickLike}>👍</span> { like } </p>
    </div>
  )
}

export default App;

// component의 단점: state, 다른 함수에 있던 변수 가져다 쓸 수 없음 