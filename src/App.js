
/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [title,setTitle]=useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학'])
  let [value,setValue]=useState(null)
  let [like,setLike]= useState(new Array(title.length).fill(0))
  let [inputValue, setInputValue]=useState('')

  return (
  <div className="App">
    <div className="black-nav">
      <div>Blog</div>
    </div> 
        {title.map((data,i)=>(
        <div className="list" key={i}>
          <h4 
            onClick={()=>{
            if(value==null) setValue(i)
            else if(value===i) setValue(null)
           }}> {data}
           <span onClick={(e)=>{
            e.stopPropagation()
            let copy=[...like]
            copy[i]++
            setLike(copy)
           }}>👍</span> {like[i]} 
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={()=>{
            let copy=[...title]
            copy.splice(i,1)
            setTitle(copy)
          }}>삭제</button>
          {value===i && (
          <Modal 
          value={value}
          title={title} 
          color={'lightblue'} 
          onChange={setTitle}/> 
          )}
        </div>
      ))}

    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
    <button onClick={()=> {
      let copy=[...title]
      copy.push(inputValue)
      setTitle(copy)
      setInputValue('')
      setLike([...like,0])
    }}>글발행</button>
  </div>
  );
}

function Modal({value, color,onChange,title}){
  return(
      <div className="modal" style={{background: color}}>
        <h4>{title[value]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy=[...title]
          copy[0]='수정'
          onChange(copy)
        }}>글 수정</button>
      </div>
  )
}

export default App;
