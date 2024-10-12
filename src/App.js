import React, { useState } from 'react';
import './App.css';

let numOfClick = 0;
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
function addNum() {
  alert('click' + numOfClick); 
  
  numOfClick++;
}


function App() {
  
  //Destructuring
  //var [a, b] = [10, 100]; // a= 10, b = 100
 
  let posts = 'React Blog';
  let [Title, setTitle] = useState('React Lessons');  
  let [Ch1Title, setCh1Title] = useState(['Chapter #1', 'Check differences between state and variables']);  
  let [Ch2Title, setCh2Title] = useState(['Chapter #2', 'Eventlistener with thumbs up button']);  
  let [Homework, setHomework] = useState(['Homework', 'Add a button for updating chapter2 title']);  
  let [numOfClick, updateNOC] = useState(0);
  const [currentDate, setCurrentDate] = useState(getDate());
   
  const renameTitle = () =>{   //Modify Array, object state data
    var newArr = [...Ch2Title]; //Do not update state directly.
                                //Do deep copy 
    newArr[0] = "Update Chapter #2 to Chapter #3";
    setCh2Title(newArr);
  }

  return (
    <div className ='App'>
      <div className='black-nav'>
        <div> { posts } </div>
      </div>
      <div className='list'>
       <h3> { Title } <span onClick={ () => { updateNOC(numOfClick++);}}>👍</span> { numOfClick } </h3>    
       <ol>
        <li> { Ch1Title[0] } </li>
        <ul>        
          <li> { Ch1Title[1] } </li>
        </ul> 
        <li> { Ch2Title[0] } </li>
        <ul>        
          <li> { Ch2Title[1] } </li>
        </ul>    
        <li> { Homework[0] } </li>
        <ul>
          <li>
            { Homework[1] }            
          </li>
          <li>
            <button onClick={ () => { setCh2Title(['Chapter3', 'Move on to the next Chapter #3'])}}> Homework - Rename Title(1)</button>
            <br/>
            <button onClick={ renameTitle }> Homework - Rename Title(2)</button>
          </li>
          </ul>      
        </ol>      
        {/* <p>{ a }</p>
        <p>{ b }</p> */}
        <p>Published on {currentDate}</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
