
/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [title,setTitle]=useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학'])
  let [like,setLike]=useState(0)
  let [modal,setModal]= useState(false) //일단 닫힌 상태로 구현
  return (
    <div className="App">
    <div className="black-nav">
        <div>Blog</div>
      </div>
      <div className="list" onClick={()=> setModal(!modal)}>
        <h4>{title[0]} <span onClick={()=>setLike(like+1)}>👍</span>{like} </h4>
        <p>2월 17일 발행</p>
      </div>
      {modal && <Modal /> }
    </div>
  );
}

function Modal(){
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
