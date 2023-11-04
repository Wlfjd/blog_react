
/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [title,setTitle]=useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학'])
  let [value,setValue]=useState(null)
  let [like,setLike]= useState(new Array(title.length).fill(0))
  let [inputValue, setInputValue]=useState('')
  const currentDate = new Date(); // 현재 날짜 및 시간을 나타내는 Date 객체 생성

  const month = currentDate.getMonth() + 1; // 현재 월 (0부터 시작하므로 +1)
  const day = currentDate.getDate(); // 현재 일

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
          <p>{month}월 {day}일 발행</p>
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
          onChange={setTitle}
          month={month}
          day={day}/> 
          )}
        </div>
      ))}
      <div className='input- container'>
      <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className='input'></input>
          <button className="button"
                  onClick={()=> {
                    let copy=[...title]
                    copy.push(inputValue)
                    setTitle(copy)
                    setInputValue('')
                    setLike([...like,0])
                  }}>글발행</button>
      </div>
    
  </div>
  );
}

function Modal({value, color,onChange,title,month,day}){
  return(
      <div className="modal" style={{background: color}}>
        <h4>{title[value]}</h4>
        <p>{month}월 {day}일 발행</p>
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
