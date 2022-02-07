import './App.css';
import React, { useState, useEffect } from 'react';
import Gist from './Gist'
import dataService from './dataService'

function App() {
  const [userName, setUserName] = useState('')
  const [page, setPage] = useState(1)
  const [gist, setGist] = useState([])
  const [loader, setLoader] = useState(false)

  function getData() {
    // m1guelpf dideler
    if (userName) {
      setLoader(true)
      dataService.getGist(userName, page)
        .then(res => {
          setGist(res)
        })
        .catch(() => {
            console.log('Unable to connect to server')
        })
        .finally(() => {
          setLoader(false)
        })
    }
  }

  useEffect(getData, [page])
  return (
    <div className="App">
      <div className="header">GIST search by username</div>
      <div className="search">
        <input onChange={(e) => setUserName(e.target.value)} value={userName} className="input" placeholder="Enter username..." />
        <button className="submit" disabled={!userName} onClick={getData}>Search</button>
      </div>
      <Gist
        gist={gist}
        page={page}
        loader={loader}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
