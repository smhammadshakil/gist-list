import '../css/App.css';
import React, { useState, useEffect } from 'react';
import dataService from '../services/dataService';

function ForkedUsers({ id = '' }) {
    const [forkedOwners, setForkedOwners] = useState([])

    useEffect(() => {
        const fetchForkData = async () => {
            if (id) {
                const resp = await dataService.getForkedDetails(id)
                setForkedOwners(resp || [])
            }
        }
        fetchForkData()
    }, [id])

    if (!forkedOwners.length) return null
    return (
        <div className="fork">
            <b>Forked By: </b>
            {forkedOwners.map(fork => <img alt="avatar" key={fork.id} className="avatar" src={fork.owner.avatar_url} />)}
        </div>
    );
}

export default ForkedUsers;
