import Timer from './components/timer.js'
import './App.css';
import data from './components/data.js';
import Question from './components/question';

import React, { useState, useEffect } from 'react';



function App() {
  const [questionNumber,setQuestionNumber]=useState(0);

  function Onclick(number){
    
    var data_num=number<0?(data.length-1):number;
    data_num=number>(data.length-1)&&number>0?0:data_num;
   
      setQuestionNumber(data_num);
    return true;
    }

  return (
    <div className="App">
      <header id="App-header">Header<div><Timer></Timer></div></header>
      <section id="Q-section"><article><Question decideQuestion={Onclick} qno={questionNumber} question={data[questionNumber]} />Question</article><section></section></section>
      <section id="list-section">List</section>
      <footer id="App-footer">Footer</footer>
    </div>
  );
}


export default App;
