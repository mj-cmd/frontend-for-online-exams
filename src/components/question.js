import React, { useState, useEffect } from 'react';
import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai';
function Question({decideQuestion,qno,question}){


    const changeColor=(e)=>{
        
       var children= e.target.parentNode.children;
       console.log((children));
       for(let child in children)
      {
          console.log(children[child].classList);
          if(children[child].classList)
          children[child].classList.remove('selected-option');
        }
        e.target.classList.add('selected-option');
        e.target.classList.add('select-test');
        return true;
    }

   
const id=question.id;
 return (<div><header>{question.question}</header>
 <div   id={qno}>{question.option.map((option_num,index)=>{return <div onClick={(event)=>{changeColor(event)}} 
 key={index}>
     {option_num}
     </div>})}
 </div>
 <AiFillCaretLeft onClick={()=>{ return decideQuestion(id-1);}}/>
 <AiFillCaretRight onClick={()=>{return decideQuestion(id+1);}}/>
 </div>)

}
export default Question;