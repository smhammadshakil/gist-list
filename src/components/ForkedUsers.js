import '../css/App.css';
import React, { useState, useEffect } from 'react';
import dataService from '../services/dataService';

function ForkedUsers({ id }) {
    const [forkedOwners, setForkedOwners] = useState([])

    useEffect(() => {
        if (id) {
            const url = id + '?per_page=3'
            dataService.getForkedDetails(url)
                .then(res => {
                    if (res.length) {
                        setForkedOwners(res)
                    }
                })
                .catch(() => {
                    console.log('Unable to connect to server')
                })
        }
    }, [id])

    if (forkedOwners.length) return null
    return (
        <div className="fork">
            <b>Forked By: </b>
            {forkedOwners.map(fork => <img alt="avatar" key={fork.id} className="avatar" src={fork.owner.avatar_url} />)}
        </div>
    );
}

export default ForkedUsers;
