import React, { useState } from 'react';
import './App.css';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function App() {
  var [a, b] = [10, 100]; // a= 10, b = 100
  //Destructuring
  let posts = 'React Blog';
  let [Title, setTitle] = useState('React Lessons');  
  let [Ch1Title, setCh1Title] = useState(['Chapter #1', 'Check differences between state and variables']);  
  let [Ch2Title, setCh2Title] = useState(['Homework', 'Add 2 items under ul tags', 'Add 2 items under ul tags']);  
  

  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className ='App'>
      <div className='black-nav'>
        <div> { posts } </div>
      </div>
      <div className='list'>
       <h3> { Title } </h3>    
       <ol>
        <li> { Ch1Title[0] } </li>
        <ul>        
          <li> { Ch1Title[1] } </li>
        </ul> 
        <li> { Ch2Title[0] } </li>
        <ul>        
          <li> { Ch2Title[1] } </li>
          <li> { Ch2Title[2] } </li>
        </ul>          
        </ol>      
       
        <p>Published on {currentDate}</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
