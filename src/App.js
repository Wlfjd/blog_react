
/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [title,setTitle]=useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학'])
let [like,setLike]=useState(0)
  return (
    <div className="App">
    <div className="black-nav">
        <div>Blog</div>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={()=>setLike(like+1)}>👍</span>{like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={()=>{
        let copy=[...title]
        copy[0]= '여자 코트 변경'
        setTitle(copy)
      }}> edit </button>
    </div>
  );
}

export default App;
