import '../css/App.css';
import React, { useState, useEffect } from 'react';
import dataService from '../services/dataService';

function ForkedUsers({ forkUrl }) {
    const [forkedOwners, setForkedOwners] = useState([])

    const getForkedDetails = () => {
        if (forkUrl) {
            const url = forkUrl + '?per_page=3'
            dataService.getForkedDetails(url)
                .then(res => {
                    console.log(res)
                    if (res.length) {
                        setForkedOwners(res)
                    }
                })
                .catch(() => {
                    console.log('Unable to connect to server')
                })
        }
    }
    useEffect(getForkedDetails, [])

  return (
    <>
        {
            forkedOwners.length ? 
            <div className="fork">
                <b>Forked By: </b>
                {forkedOwners.map(fork => <img alt="avatar" key={fork.id} className="avatar" src={fork.owner.avatar_url} />)}
            </div> : ''
        }
    </>
  );
}

export default ForkedUsers;
