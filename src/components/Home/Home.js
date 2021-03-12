import './Home.css'
import React, { useEffect, useState } from 'react';
import LeagueBox from '../LeagueBox/LeagueBox';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])

    const first15Leagues = leagues.slice(0, 15);

    return (
        <div className="home-container">
            <div className="home-box">
                {
                    first15Leagues.map(league => <LeagueBox league={league} key={league.idLeague}></LeagueBox>)
                }
            </div>
        </div>
    );
};

export default Home;