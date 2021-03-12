import React, { useEffect, useState } from 'react';
import './LeagueBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LeagueBox = (props) => {
    const { strLeague, idLeague, strSport} = props.league;
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [idLeague]);

    const leagueLogo = leagues.map(league => league.strBadge)

    return (
        <div className="league-card">
            <div className="card league-card-inner">
                <img src={leagueLogo} className="card-img-top league-logo" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sport type: {strSport}</p>
                    <Link  to ={`/details/${idLeague}`}>
                        <b className="btn btn-primary ">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></b>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeagueBox;