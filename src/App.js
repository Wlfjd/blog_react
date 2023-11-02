
/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [title,setTitle]=useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학'])
  let [like,setLike]=useState(0)
  //let [modal,setModal]= useState(false) //일단 닫힌 상태로 구현
  let [value,setValue]=useState(null)
  let [good,setGood]= useState(new Array(title.length).fill(0))

  return (
  <div className="App">
    <div className="black-nav">
      <div>Blog</div>
    </div>
    {title.map((data,i)=>{
      return(
        <>   
        <div className="list" key={i}>
          <h4 className="inner">
          <div 
            onClick={()=>{
            if(value==null) setValue(i)
            else if(value===i) setValue(null)
           }}> {data}
          </div>
          <div>
           <span onClick={()=>{
            let copy=[...good]
            copy[i]++
            setGood(copy)
           }}>👍</span> {good[i]} 
           </div>
          </h4>
          <p>2월 17일 발행</p>
        </div>
        {value===i && 
        <Modal 
         value={i}
         title={title} 
         color={'lightblue'} 
         onchange={setTitle}/> }
        </>
      )
    })}
  </div>
  );
}

function Modal({value, color,onchange,title}){
  return(
      <div className="modal" style={{background: color}}>
        <h4>{title[value]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy=[...title]
          copy[0]='수정'
          onchange(copy)
        }}>글 수정</button>
      </div>
  )
}

export default App;
