import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';

const TeamDetailsContainer = () => {
    const {leagueId} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.leagues))
    }, [leagueId])
    return (
        <div className="">
            {
                teamDetails.map((teamDetail => <TeamDetails teamDetail = {teamDetail} key={teamDetail.idLeague}></TeamDetails>))
            }
        </div>
    );
};

export default TeamDetailsContainer;