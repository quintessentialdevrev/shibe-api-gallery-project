import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [photo, setPhoto] = useState([""])
  const [dark, setDark] = useState(true)

  const refresh = () => {
    fetch("http://shibe.online/api/shibes?count=50")
        .then(res => res.json())
        .then(data => setPhoto(data))
  };

  useEffect(() => {
    refresh()
  }, [])

  function handleDark() {
    setDark(prev => !prev)
  } 

  let arr1 = []
  let arr2 = []
  for (let i = 0; i<30; i++){
    arr1.push(<img id={i} className="shibe" src={photo[i]} />)
  }
  for (let i = 30; i<50; i++){
    arr2.push(<img id={i} className="shibe" src={photo[i]} />)
  }
  const [arr1Id, setArr1Id] = useState(true)
  const [arr2Id, setArr2Id] = useState(false)
  function loadPage1() {
    setArr1Id(true) 
    setArr2Id(false)
  }
  function loadPage2() {
    setArr2Id(true)
    setArr1Id(false)
  }

  return (
      <div className="App">
      <Navbar Dark={dark} onClicking={handleDark}/>
      <div className={dark ? "main-dark" : "main-white"}>
        {arr1Id && arr1}
        {arr2Id && arr2}
      </div>
      <div className="buttons">
        <button className="pageBut" onClick={loadPage1}>1</button>
        <button className="pageBut" onClick={loadPage2}>2</button>
      </div>
      <button className="refresh" onClick={refresh}>Refresh</button>
      </div>
  )
}

export default App
