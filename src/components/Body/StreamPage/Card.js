import React from 'react'
import { useHistory } from 'react-router-dom';
import './Card.css'

function Card({id,src, title}) {
    const history = useHistory();

    const selectCard = () =>{
        localStorage.setItem('branchId',id);
    }
    return (
        <div onClick={selectCard} className = 'card'>
            <img src = {src} alt = "" />
            <div className = 'card__info'>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Card
