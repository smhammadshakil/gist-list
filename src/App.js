import './css/App.css';
import React, { useState, useEffect } from 'react';
import Gist from './components/Gist'
import dataService from './services/dataService'

function App() {
  const [userName, setUserName] = useState('')
  const [page, setPage] = useState(1)
  const [gist, setGist] = useState([])
  const [loader, setLoader] = useState(false)

  const getData = () => {
    // m1guelpf fabpot
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
  const onSearch = () => {
    if (page === 1) {
      getData()
      return
    }
    setPage(1)
  }
  useEffect(getData, [page])
  return (
    <div className="App">
      <div className="header">GIST search by username</div>
      <div className="search">
        <input onChange={(e) => setUserName(e.target.value)} value={userName} className="input" placeholder="Enter username..." />
        <button className="submit" disabled={!userName} onClick={onSearch}>Search</button>
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
