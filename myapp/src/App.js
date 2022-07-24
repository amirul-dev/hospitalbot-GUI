import React, { useState, useEffect } from 'react'
import Profile from './profile'

function App() {

  const [page, setPage] = useState([{}])   //data is variable, and setData is fn that manipulates state of data variable
  const [audio, setAudio] = useState([{}])

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        ListenFn();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

function ListenFn(){
    console.log("listening..")
    setAudio("listening..") 
    fetch("/audio").then(                //fetches whatever under /members in backend
    res => res.json()
    ).then(
        data => {
            setAudio(data)                      //sets data in res using setData
            console.log(data.audio)
        }
    )
}

  useEffect(() => {
    fetch("/pages").then(                //fetches whatever under /members in backend
      res => res.json()                    //converts res (return) to json
    ).then(
      data => {
        setPage(data)                      //sets data in res using setData
      }
    )
  })                                   //empty array to run the fn only once

  return (
    <div>
      {(typeof page.pages === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        (audio.audio === 'profile') ? (
        <Profile/>): ( <div></div>
        )
      )}
    </div>
  )
}

export default App

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


