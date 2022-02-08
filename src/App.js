import './css/App.css';
import React, { useState } from 'react';
import Gist from './components/Gist'
import dataService from './services/dataService'

function App() {
  const [userName, setUserName] = useState('')
  const [page, setPage] = useState(1)
  const [gist, setGist] = useState([])
  const [loader, setLoader] = useState(false)

  const getData = async (userN, p = 1) => {
      setLoader(true)
      const resp = await dataService.getGist(userN, p)
      setGist(resp)
      setLoader(false)
  }
  const onSearch = () => {
    getData(userName, 1)
  }
  const onChangePage = (page) => {
    setPage(page)
    getData(userName, page)
  }
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
        setPage={onChangePage}
      />
    </div>
  );
}

export default App;
